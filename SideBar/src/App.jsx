import React, { useState } from 'react'
import { Button, Layout, theme } from 'antd';
import './App.css'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Logo from './components/logo/Logo';
import MenuList from './components/Menu/MenuList';
import ThemeButton from './components/ThemeButton/ThemeButton';

const {Header, Sider} = Layout;

function App() {

  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <Layout>
      <Sider 
        collapsed = {collapsed}
        collapsible
        trigger = {null}
        theme={darkTheme ? 'dark' : 'light'} 
        className='sidebar'
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ThemeButton darktheme={darkTheme} toggleTheme={toggleTheme}/>
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer}}>
          <Button 
            className='toggle' 
            type = 'text' 
            onClick={() => {setCollapsed(!collapsed)}}
            icon= {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} >
          </Button>
        </Header>
      </Layout>
    </Layout>
  )
}

export default App
