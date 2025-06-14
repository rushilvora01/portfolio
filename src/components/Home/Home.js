import React, { useEffect } from 'react';
import { Typography, Button, Row, Col, message } from 'antd';
import { DownloadOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import { initScrollReveal } from '../../utils/scrollReveal';
import './Home.css';

const { Title, Paragraph } = Typography;

const Home = () => {
  const [messageApi, contextHolder] = message.useMessage()
  // Initialize scroll reveal effect
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  // Function to handle resume download
  const handleResumeDownload = async () => {
    try {
      const response = await fetch(portfolioData?.about?.resumeDownloadUrl);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window?.URL?.createObjectURL(blob);
      const a = document?.createElement('a');
      a.style.display = 'none';
      a.href = url;
      
      // Extract filename from URL or use default
      const filename = 'rushil-vora-resume.pdf';
      a.download = filename;
      
      document?.body?.appendChild(a);
      a.click();
      window?.URL?.revokeObjectURL(url);
      document?.body?.removeChild(a);
    } catch (error) {
      console.error('Error downloading resume:', error);
      messageApi.error('Failed to download resume. Please try again later.');
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      {contextHolder}
      <section className="hero-section">
        <div className="hero-content">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text"
              >
                <div className="greeting">Hello, I'm</div>
                <Title level={1} className="name">
                  {portfolioData.about.name}
                </Title>
                <div className="title">{portfolioData.about.title}</div>
                <Paragraph className="description">
                  {portfolioData.about.description}
                </Paragraph>
                <div className="hero-buttons">
                  <Button 
                    type="primary" 
                    size="large" 
                    className="primary-button"
                    onClick={handleResumeDownload}
                    icon={<DownloadOutlined />}
                  >
                    Download Resume
                  </Button>
                  <Link to="/projects">
                    <Button 
                      size="large" 
                      className="secondary-button"
                    >
                      View Projects <ArrowRightOutlined />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-image-container"
              >
                <div className="hero-image">
                  <div className="blob"></div>
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                  <div className="shape-3"></div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header reveal">
            <Title level={2} className="section-title">What I Do</Title>
            <Paragraph className="section-subtitle">
              I design and develop services for customers of all sizes, specializing in creating stylish, modern websites and web applications.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="service-card reveal"
              >
                <div className="service-icon frontend-icon"></div>
                <Title level={4}>Frontend Development</Title>
                <Paragraph>
                  Building responsive and interactive user interfaces with modern frameworks and libraries.
                </Paragraph>
              </motion.div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="service-card reveal delay-1"
              >
                <div className="service-icon backend-icon"></div>
                <Title level={4}>Backend Development</Title>
                <Paragraph>
                  Creating robust server-side applications and RESTful APIs that power your web applications.
                </Paragraph>
              </motion.div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="service-card reveal delay-2"
              >
                <div className="service-icon database-icon"></div>
                <Title level={4}>Database Design</Title>
                <Paragraph>
                  Designing optimized database schemas and implementing efficient data management systems.
                </Paragraph>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects-section">
        <div className="container">
          <div className="section-header reveal">
            <Title level={2} className="section-title">Featured Projects</Title>
            <Paragraph className="section-subtitle">
              Some of my recent works that showcase my skills and expertise.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {portfolioData.projects.slice(0, 2).map((project) => (
              <Col xs={24} sm={24} md={12} lg={12} xl={12} key={project.id}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="project-card reveal"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <Title level={4}>{project.title}</Title>
                    <Paragraph>{project.description}</Paragraph>
                    <div className="project-technologies">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <Link to={`/projects`}>
                        <Button type="primary">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <div className="view-all-button reveal">
            <Link to="/projects">
              <Button type="primary" size="large">
                View All Projects <ArrowRightOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section reveal">
        <div className="container">
          <div className="cta-content">
            <Title level={2}>Let's work together on your next project</Title>
            <Paragraph>
              I'm currently available for freelance work or full-time opportunities.
            </Paragraph>
            <Link to="/contact">
              <Button type="primary" size="large">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 