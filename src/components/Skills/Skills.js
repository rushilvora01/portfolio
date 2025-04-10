import React, { useEffect } from 'react';
import { Typography, Row, Col, Progress, Card, Divider, Tag } from 'antd';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import { initScrollReveal } from '../../utils/scrollReveal';
import './Skills.css';

const { Title, Paragraph } = Typography;

const Skills = () => {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  // Define skill icons for the cards
  const skillIcons = {
    React:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    JavaScript:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    TypeScript:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'HTML/CSS':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    Redux:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'Next.js':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Node.js':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    Express:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    Python:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    Django:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    MongoDB:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    PostgreSQL:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    Docker:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  };

  return (
    <div className="skills-container">
      <div className="container">
        <section className="skills-section">
          <div className="section-header text-center reveal">
            <Title level={2} className="section-title">
              My Skills
            </Title>
            <Paragraph className="section-subtitle">
              My technical level and professional skillset
            </Paragraph>
          </div>

          <div className="skills-content">
            {portfolioData.skills.map((category, index) => (
              <div key={index} className="skill-category reveal">
                <Title level={3} className="category-title">
                  {category.category}
                </Title>
                <div className="skill-bars">
                  <Row gutter={[24, 24]}>
                    {category.items.map((skill, skillIndex) => (
                      <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={8}
                        xl={8}
                        key={skillIndex}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: skillIndex * 0.1,
                          }}
                          className="skill-item"
                        >
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress
                            percent={skill.level}
                            showInfo={false}
                            strokeColor={{
                              '0%': '#6C63FF',
                              '100%': '#5A52D5',
                            }}
                            trailColor="#e9ecef"
                            strokeWidth={8}
                          />
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider className="section-divider reveal" />

        <section className="skill-cards-section reveal">
          <Title level={3} className="text-center mb-40">
            Technologies I Work With
          </Title>

          <Row gutter={[16, 16]}>
            {Object.entries(skillIcons).map(([name, icon], index) => (
              <Col xs={12} sm={8} md={6} lg={4} xl={4} key={index}>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="skill-card" bordered={false}>
                    <div className="skill-card-content">
                      <img src={icon} alt={name} className="skill-icon" />
                      <div className="skill-card-name">{name}</div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>

        <Divider className="section-divider reveal" />

        <section className="other-skills-section reveal">
          <Title level={3} className="text-center mb-40">
            Other Skills
          </Title>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card className="other-skill-card" bordered={false}>
                <Title level={4}>Unit Testing</Title>
                <div className="skill-tags">
                  <Tag color="blue">Jest</Tag>
                  <Tag color="blue">React Testing Library</Tag>
                  <Tag color="blue">Enzyme</Tag>
                  <Tag color="blue">Jasmine</Tag>
                  <Tag color="blue">Mocha</Tag>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card className="other-skill-card" bordered={false}>
                <Title level={4}>Project Management</Title>
                <div className="skill-tags">
                  <Tag color="green">Agile</Tag>
                  <Tag color="green">Scrum</Tag>
                  <Tag color="green">Kanban</Tag>
                  <Tag color="green">JIRA</Tag>
                  <Tag color="green">Version Control</Tag>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card className="other-skill-card" bordered={false}>
                <Title level={4}>Soft Skills</Title>
                <div className="skill-tags">
                  <Tag color="purple">Communication</Tag>
                  <Tag color="purple">Problem Solving</Tag>
                  <Tag color="purple">Time Management</Tag>
                  <Tag color="purple">Adaptability</Tag>
                  <Tag color="purple">Creativity</Tag>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default Skills;
