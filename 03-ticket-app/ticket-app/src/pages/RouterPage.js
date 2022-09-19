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
                <Sider collapsedWidth={0} breakpoint="md">
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
                            <Route path="/ingresar">
                                <Ingresar />
                            </Route>
                            <Route path="/cola">
                                <Cola />
                            </Route>
                            <Route path="/crear">
                                <CrearTicket />
                            </Route>
                            <Route path="/escritorio">
                                <Escritorio />
                            </Route>

                            <Redirect to="/ingresar" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default RouterPage;