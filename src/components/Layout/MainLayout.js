import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Affix } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  ToolOutlined, 
  ProjectOutlined, 
  HistoryOutlined,  
  MailOutlined, 
  GithubOutlined, 
  LinkedinOutlined, 
  TwitterOutlined, 
  MenuOutlined, 
  CloseOutlined 
} from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../../utils/ScrollToTop';
import './MainLayout.css';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when navigating
  useEffect(() => {
    setVisible(false);
  }, [location.pathname]);

  const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: 'Home' },
    { key: '/about', icon: <UserOutlined />, label: 'About' },
    { key: '/skills', icon: <ToolOutlined />, label: 'Skills' },
    { key: '/projects', icon: <ProjectOutlined />, label: 'Projects' },
    { key: '/experience', icon: <HistoryOutlined />, label: 'Experience' },
    // { key: '/education', icon: <BookOutlined />, label: 'Education' },
    { key: '/contact', icon: <MailOutlined />, label: 'Contact' },
  ];

  return (
    <Layout className="layout">
      <ScrollToTop />
      <Affix>
        <Header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <Link to="/">My Portfolio</Link>
          </div>
          
          <div className="desktop-menu">
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={menuItems.map(item => ({
                key: item.key,
                icon: item.icon,
                label: <Link to={item.key}>{item.label}</Link>
              }))}
            />
          </div>
          
          <div className="mobile-menu-button">
            <Button 
              type="text" 
              icon={<MenuOutlined />} 
              onClick={() => setVisible(true)}
            />
          </div>
          
          <Drawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={() => setVisible(false)}
            open={visible}
            closeIcon={<CloseOutlined />}
            width={300}
          >
            <Menu
              mode="vertical"
              selectedKeys={[location.pathname]}
              items={menuItems.map(item => ({
                key: item.key,
                icon: item.icon,
                label: <Link to={item.key}>{item.label}</Link>
              }))}
            />
          </Drawer>
        </Header>
      </Affix>
      
      <Content className="content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </Content>
      
      <Footer className="footer">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <GithubOutlined />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedinOutlined />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <TwitterOutlined />
            </a>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout; 