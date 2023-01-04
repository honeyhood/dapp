import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import App from '../../components/App';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Navbar from '../../components/Navbar';

const Platform = () => {
  return (
    <Layout hasSider className='isolate bg-white min-h-screen'>
      <Sidebar />
      <Layout
        className="site-layout"
      >
        <Navbar/>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            <App/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Platform;