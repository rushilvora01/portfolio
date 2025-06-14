import React, { useEffect } from 'react';
import { Typography, Row, Col, Button, Timeline, Card, message } from 'antd';
import {
  DownloadOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import { initScrollReveal } from '../../utils/scrollReveal';
import './About.css';

const { Title, Paragraph } = Typography;

const About = () => {
  const [messageApi, contextHolder] = message.useMessage();
  
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
    <div className="about-container">
      {contextHolder}
      <div className="container">
        <section className="about-section">
          <div className="section-header text-center reveal">
            <Title level={2} className="section-title">
              About Me
            </Title>
            <Paragraph className="section-subtitle">
              Get to know more about me and my background
            </Paragraph>
          </div>

          <Row gutter={[40, 40]} className="about-content">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="about-image-container reveal"
              >
                <div className="about-image">
                  <div className="image-blob"></div>
                  <div className="image-decoration"></div>
                </div>
              </motion.div>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="about-text reveal"
              >
                <Title level={3} className="about-title">
                  I'm {portfolioData.about.name}, a {portfolioData.about.title}
                </Title>
                <Paragraph className="about-description">
                  {portfolioData.about.longDescription}
                </Paragraph>

                <div className="personal-info">
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                      <div className="info-item">
                        <EnvironmentOutlined className="info-icon" />
                        <div className="info-text">
                          <span className="info-label">Location:</span>
                          <span className="info-value">
                            {portfolioData.about.location}
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="info-item">
                        <MailOutlined className="info-icon" />
                        <div className="info-text">
                          <span className="info-label">Email:</span>
                          <span className="info-value">
                            {portfolioData.about.email}
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="info-item">
                        <PhoneOutlined className="info-icon" />
                        <div className="info-text">
                          <span className="info-label">Phone:</span>
                          <span className="info-value">
                            {portfolioData.about.phone}
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="social-links">
                  <a
                    href={portfolioData.contact.socialMedia.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubOutlined />
                  </a>
                  <a
                    href={portfolioData.contact.socialMedia.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinOutlined />
                  </a>
                  <a
                    href={portfolioData.contact.socialMedia.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterOutlined />
                  </a>
                </div>

                <Button
                  type="primary"
                  size="large"
                  icon={<DownloadOutlined />}
                  className="download-cv-btn"
                  onClick={handleResumeDownload}
                >
                  Download Resume
                </Button>
              </motion.div>
            </Col>
          </Row>
        </section>

        <section className="journey-section">
          <div className="section-header text-center reveal">
            <Title level={2} className="section-title">
              My Journey
            </Title>
            <Paragraph className="section-subtitle">
              A brief overview of my professional journey
            </Paragraph>
          </div>

          <Row gutter={[30, 30]}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{ margin: 'auto' }}
            >
              <Card className="journey-card reveal">
                <Title level={4} className="journey-title">
                  Professional Experience
                </Title>
                <Timeline className="journey-timeline">
                  {portfolioData.experience.items.map((exp, index) => (
                    <Timeline.Item key={index} color="var(--primary-color)">
                      <div className="timeline-content">
                        <Title level={5} className="timeline-title">
                          {exp.title}
                        </Title>
                        <div className="timeline-subtitle">
                          {exp.company} | {exp.period}
                        </div>
                        <Paragraph className="timeline-description">
                          {exp.description}
                        </Paragraph>
                      </div>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Col>

            {/* <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card className="journey-card reveal delay-1">
                <Title level={4} className="journey-title">
                  Education
                </Title>
                <Timeline className="journey-timeline">
                  {portfolioData.education.map((edu, index) => (
                    <Timeline.Item key={index} color="var(--primary-color)">
                      <div className="timeline-content">
                        <Title level={5} className="timeline-title">{edu.degree}</Title>
                        <div className="timeline-subtitle">
                          {edu.institution} | {edu.period}
                        </div>
                        <Paragraph className="timeline-description">
                          {edu.description}
                        </Paragraph>
                      </div>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Col> */}
          </Row>
        </section>
      </div>
    </div>
  );
};

export default About;
