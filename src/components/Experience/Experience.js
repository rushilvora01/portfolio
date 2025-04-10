import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Tag, Button, Divider } from 'antd';
import { motion } from 'framer-motion';
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
  RightOutlined,
  LeftOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import portfolioData from '../../data/portfolioData';
import { initScrollReveal } from '../../utils/scrollReveal';
import './Experience.css';

const { Title, Paragraph, Text } = Typography;

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const experienceCount = portfolioData.experience.items.length;

  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  const nextExperience = () => {
    setActiveExperience((prev) => (prev + 1) % experienceCount);
  };

  const prevExperience = () => {
    setActiveExperience(
      (prev) => (prev - 1 + experienceCount) % experienceCount
    );
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="experience-container">
      <div className="container">
        <section className="experience-section">
          <div className="section-header text-center reveal">
            <Title level={2} className="section-title">
              Work Experience
            </Title>
            <Paragraph className="section-subtitle">
              My professional journey and roles I've taken on over the years
            </Paragraph>
          </div>

          {/* Timeline Nav Bar - Desktop */}
          <div className="timeline-navbar desktop-timeline reveal">
            {portfolioData.experience.items.map((exp, index) => (
              <div
                key={index}
                className={`timeline-nav-item ${
                  index === activeExperience ? 'active' : ''
                }`}
                onClick={() => setActiveExperience(index)}
              >
                <div className="timeline-node">
                  <div className="timeline-node-inner"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">
                    {exp.period.split(' - ')[0]}
                  </div>
                  <div className="timeline-company">{exp.company}</div>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>

          {/* Active Experience Card */}
          <motion.div
            key={activeExperience}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="active-experience-container reveal"
          >
            <Card className="experience-card active-card">
              <Row gutter={[30, 30]}>
                <Col xs={24} md={24} lg={8}>
                  <div className="company-info">
                    <Title level={3} className="company-name">
                      {portfolioData.experience.items[activeExperience].company}
                    </Title>
                    <Tag color="blue" className="position-tag">
                      {portfolioData.experience.items[activeExperience].title}
                    </Tag>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <ClockCircleOutlined className="meta-icon" />
                        <span>
                          {
                            portfolioData.experience.items[activeExperience]
                              .period
                          }
                        </span>
                      </div>
                      <div className="meta-item">
                        <EnvironmentOutlined className="meta-icon" />
                        <span>
                          {
                            portfolioData.experience.items[activeExperience]
                              .location
                          }
                        </span>
                      </div>
                    </div>

                    {/* Mobile Navigation Controls */}
                    <div className="mobile-nav-controls">
                      <Button
                        type="default"
                        shape="circle"
                        icon={<LeftOutlined />}
                        onClick={prevExperience}
                        disabled={experienceCount <= 1}
                        className="nav-button"
                      />
                      <Text className="experience-counter">
                        {activeExperience + 1}/{experienceCount}
                      </Text>
                      <Button
                        type="default"
                        shape="circle"
                        icon={<RightOutlined />}
                        onClick={nextExperience}
                        disabled={experienceCount <= 1}
                        className="nav-button"
                      />
                    </div>
                  </div>
                </Col>

                <Col xs={24} md={24} lg={16}>
                  <div className="experience-details">
                    <Paragraph className="experience-description">
                      {
                        portfolioData.experience.items[activeExperience]
                          .description
                      }
                    </Paragraph>

                    <Divider className="responsibilities-divider" />

                    <div className="responsibilities-section">
                      <Title level={5} className="responsibilities-title">
                        Key Responsibilities:
                      </Title>

                      <motion.ul
                        className="responsibilities-list"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {portfolioData.experience.items[
                          activeExperience
                        ].description?.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="responsibility-item"
                            variants={itemVariants}
                          >
                            <CheckCircleOutlined className="responsibility-icon" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    {portfolioData.experience.items[activeExperience]
                      .technologies?.length > 0 && (
                      <>
                        <Divider className="technologies-divider" />
                        <Title level={5} className="technologies-title">
                          Technologies Used:
                        </Title>
                        <motion.ul className="technologies-list">
                          <motion.li
                            className="technologies-section"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {portfolioData.experience.items[
                              activeExperience
                            ].technologies?.map((tech, idx) => (
                              <Tag
                                key={idx}
                                color="blue"
                                className="technology-tag"
                                style={{ margin: '5px 5px' }}
                              >
                                {tech}
                              </Tag>
                            ))}
                          </motion.li>
                        </motion.ul>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Card>
          </motion.div>

          {/* Desktop Navigation Controls */}
          <div className="desktop-nav-controls reveal">
            <Button
              type="primary"
              icon={<LeftOutlined />}
              onClick={prevExperience}
              disabled={experienceCount <= 1}
              className="desktop-nav-button"
            >
              Previous
            </Button>
            <Button
              type="primary"
              icon={<RightOutlined />}
              onClick={nextExperience}
              disabled={experienceCount <= 1}
              className="desktop-nav-button right"
            >
              Next
            </Button>
          </div>
        </section>

        <section className="experience-summary-section reveal">
          <Row gutter={[30, 30]} align="middle">
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="summary-col"
            >
              <motion.div
                className="summary-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Title level={3} className="summary-title">
                  My Professional Journey
                </Title>
                <Paragraph className="summary-description">
                  Throughout my career, I've worked on a diverse range of
                  projects, from small business websites to large-scale
                  enterprise applications. My experience spans multiple
                  industries including e-commerce, healthcare, finance, and
                  education.
                </Paragraph>
                <Paragraph className="summary-description">
                  I've collaborated with cross-functional teams, managed junior
                  developers, and served as a technical lead on numerous
                  projects. My approach focuses on delivering high-quality,
                  scalable solutions that meet business objectives while
                  providing exceptional user experiences.
                </Paragraph>

                <div className="stats-container">
                  <motion.div
                    className="stat-item"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="stat-number">2+</div>
                    <div className="stat-label">Years Experience</div>
                  </motion.div>
                  <motion.div
                    className="stat-item"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Projects Completed</div>
                  </motion.div>
                  <motion.div
                    className="stat-item"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Happy Clients</div>
                  </motion.div>
                </div>

                <motion.div
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<LinkOutlined />}
                    href={portfolioData.about.resumeViewUrl}
                    target="_blank"
                  >
                    View My Resume
                  </Button>
                </motion.div>
              </motion.div>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <motion.div
                className="experience-image-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="experience-image">
                  <div className="image-decoration"></div>
                  <div className="image-overlay"></div>
                  <div className="floating-badge">2+ Years</div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default Experience;
