const { response } = require('express');

const crearUsuario = async (req, res = response) => {

    const { nombre, email, password } = req.body;

    res.json({
        ok: true,
        msg: 'new',
        email,
        nombre,
        password
    });
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
