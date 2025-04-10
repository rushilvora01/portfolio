import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
// import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import './styles/global.css';

// Theme configuration for Ant Design
const theme = {
  token: {
    colorPrimary: '#6C63FF',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#1890ff',
    borderRadius: 8,
    wireframe: false,
  },
};

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      { path: '/experience', element: <Experience /> },
      // { path: '/education', element: <Education /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
