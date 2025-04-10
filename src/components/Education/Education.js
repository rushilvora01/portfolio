import React, { useEffect } from 'react';
import { Typography, Row, Col, Card, Tag, List, Divider } from 'antd';
import { motion } from 'framer-motion';
import { 
  CalendarOutlined, 
  BookOutlined, 
  TrophyOutlined 
} from '@ant-design/icons';
import portfolioData from '../../data/portfolioData';
import { initScrollReveal } from '../../utils/scrollReveal';
import './Education.css';

const { Title, Paragraph } = Typography;

const Education = () => {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="education-container">
      <div className="container">
        <section className="education-section">
          <div className="section-header text-center reveal">
            <Title level={2} className="section-title">Education</Title>
            <Paragraph className="section-subtitle">
              My academic background and continuous learning journey
            </Paragraph>
          </div>

          <Row gutter={[30, 30]} className="education-cards">
            {portfolioData.education.map((edu, index) => (
              <Col xs={24} sm={24} md={8} lg={8} xl={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="reveal delay-1"
                >
                  <Card 
                    className="education-card"
                    bordered={false}
                  >
                    <div className="education-card-header">
                      <Title level={4} className="institution-name">
                        {edu.institution}
                      </Title>
                      <div className="degree-badge">
                        {edu.degree}
                      </div>
                      <div className="education-period">
                        <CalendarOutlined className="period-icon" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <Paragraph className="education-description">
                      {edu.description}
                    </Paragraph>
                    
                    <div className="courses-section">
                      <Title level={5} className="courses-title">
                        <BookOutlined /> Key Courses
                      </Title>
                      <div className="courses-tags">
                        {edu.courses.map((course, i) => (
                          <Tag key={i} className="course-tag">{course}</Tag>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>

        <Divider className="section-divider reveal" />

        <section className="certifications-section">
          <div className="section-header text-center reveal">
            <Title level={2} className="section-title">Certifications</Title>
            <Paragraph className="section-subtitle">
              Professional certifications and specialized training
            </Paragraph>
          </div>

          <Row gutter={[30, 30]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card className="certifications-card reveal">
                <div className="card-title-container">
                  <TrophyOutlined className="card-icon" />
                  <Title level={4} className="card-title">Technical Certifications</Title>
                </div>
                
                <List
                  itemLayout="horizontal"
                  className="certifications-list"
                  dataSource={[
                    {
                      title: "AWS Certified Developer - Associate",
                      issuer: "Amazon Web Services",
                      date: "2022",
                      badge: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
                    },
                    {
                      title: "MongoDB Certified Developer",
                      issuer: "MongoDB University",
                      date: "2021",
                      badge: "https://university.mongodb.com/assets/images/course-completion-badges/crud-devs.png"
                    },
                    {
                      title: "Professional Scrum Master I",
                      issuer: "Scrum.org",
                      date: "2020",
                      badge: "https://static.scrum.org/web/badges/badge-psmi.svg"
                    }
                  ]}
                  renderItem={(item) => (
                    <List.Item className="certification-item">
                      <div className="certification-badge">
                        <img src={item.badge} alt={item.title} />
                      </div>
                      <div className="certification-content">
                        <div className="certification-title">{item.title}</div>
                        <div className="certification-issuer">{item.issuer}</div>
                        <div className="certification-date">Issued: {item.date}</div>
                      </div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card className="certifications-card reveal delay-1">
                <div className="card-title-container">
                  <BookOutlined className="card-icon" />
                  <Title level={4} className="card-title">Online Courses</Title>
                </div>
                
                <List
                  itemLayout="horizontal"
                  className="certifications-list"
                  dataSource={[
                    {
                      title: "Advanced React and Redux",
                      platform: "Udemy",
                      instructor: "Stephen Grider",
                      completion: "2022"
                    },
                    {
                      title: "The Complete Node.js Developer Course",
                      platform: "Udemy",
                      instructor: "Andrew Mead",
                      completion: "2021"
                    },
                    {
                      title: "JavaScript: Understanding the Weird Parts",
                      platform: "Udemy",
                      instructor: "Anthony Alicea",
                      completion: "2020"
                    },
                    {
                      title: "CS50: Introduction to Computer Science",
                      platform: "Harvard via edX",
                      instructor: "David J. Malan",
                      completion: "2019"
                    }
                  ]}
                  renderItem={(item) => (
                    <List.Item className="course-item">
                      <div className="course-content">
                        <div className="course-title">{item.title}</div>
                        <div className="course-details">
                          <span className="course-platform">{item.platform}</span>
                          <span className="separator">•</span>
                          <span className="course-instructor">{item.instructor}</span>
                        </div>
                        <div className="course-completion">Completed: {item.completion}</div>
                      </div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </section>
        
        <section className="education-cta-section reveal">
          <div className="cta-content">
            <Title level={3}>Continuous Learning</Title>
            <Paragraph>
              I believe in lifelong learning and constantly updating my skills to stay current with the latest technologies and best practices in the industry.
            </Paragraph>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="skills-icons"
            >
              <div className="skill-icon-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              <div className="skill-icon-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              </div>
              <div className="skill-icon-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              </div>
              <div className="skill-icon-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
              </div>
              <div className="skill-icon-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education; 