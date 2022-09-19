import React from 'react';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import { Ingresar } from './Ingresar';

const { Sider, Content } = Layout;

const RouterPage = () => {
    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: <Link to="/ingresar">Ingresar</Link>,
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: <Link to="/cola">Cola de tickets</Link>,
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: <Link to="/crear">Crear tickets</Link>,
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/ingresar" element={<Ingresar />} />
                            <Route path="/cola" element={<Cola />} />
                            <Route path="/crear" element={<CrearTicket />} />

                            <Route path="/escritorio" element={<Escritorio />} />

                            <Redirect to="/ingresar" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default RouterPage;