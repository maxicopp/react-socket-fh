import React from 'react';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;

const RouterPage = () => {
    return (
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
                            label: 'Ingresar',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Cola',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Crear Ticket',
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
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default RouterPage;