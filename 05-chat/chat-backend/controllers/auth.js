const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

    try {

        const { email, password } = req.body;

        // Verificar que el email no exista
        const existeEmail = await Usuario.findOne({ email });
        if (existeEmail) {
            res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            });
        }

        const usuario = new Usuario(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        // Guardar usuario en BD
        await usuario.save();

        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const login = async (req, res) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const renewToken = async (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}

module.exports = {
    crearUsuario,
    login,
    renewToken
};
