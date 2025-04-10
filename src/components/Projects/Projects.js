import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Button, Modal, Tag, Tabs } from 'antd';
import { motion } from 'framer-motion';
import {
  CloseOutlined,
  EyeOutlined
} from '@ant-design/icons';
import portfolioData from '../../data/portfolioData';
import { initScrollReveal } from '../../utils/scrollReveal';
import './Projects.css';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioData.projects);

  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  // Extract all unique technologies from projects
  const allTechnologies = Array.from(
    new Set(
      portfolioData.projects.flatMap(project => project.technologies)
    )
  );

  // Handle project filtering
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(portfolioData.projects);
    } else {
      const filtered = portfolioData.projects.filter(project => 
        project.technologies.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  }, [filter]);

  // Show project details modal
  const showProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  // Close project details modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="projects-container">
      <div className="container">
        <section className="projects-section">
          <div className="section-header text-center reveal">
            <Title level={2} className="section-title">My Projects</Title>
            <Paragraph className="section-subtitle">
              A showcase of my recent development work and side projects
            </Paragraph>
          </div>

          <div className="projects-filter reveal">
            <Tabs 
              activeKey={filter} 
              onChange={setFilter}
              centered
              className="filter-tabs"
            >
              <TabPane tab="All Projects" key="all" />
              {allTechnologies.map((tech) => (
                <TabPane tab={tech} key={tech} />
              ))}
            </Tabs>
          </div>

          <Row gutter={[30, 30]} className="projects-grid">
            {filteredProjects.map((project) => (
              <Col xs={24} sm={24} md={12} lg={8} xl={8} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="reveal"
                >
                  <Card 
                    className="project-card"
                    cover={
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                        <div className="project-overlay">
                          <Button 
                            type="primary" 
                            shape="round" 
                            onClick={() => showProjectDetails(project)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    }
                    bordered={false}
                  >
                    <div className="project-card-content">
                      <Title level={4} className="project-title">{project.title}</Title>
                      <Paragraph className="project-description">
                        {project.description}
                      </Paragraph>
                      
                      <div className="project-tech-stack">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Tag key={index} className="tech-tag">{tech}</Tag>
                        ))}
                        {project.technologies.length > 3 && (
                          <Tag className="tech-tag">+{project.technologies.length - 3}</Tag>
                        )}
                      </div>
                      
                      <div className="project-actions">
                        <Button 
                          type="primary" 
                          icon={<EyeOutlined />}
                          onClick={() => showProjectDetails(project)}
                          className="project-details-btn"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>
      </div>

      {/* Project Details Modal */}
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
        closeIcon={<CloseOutlined />}
        className="project-modal"
      >
        {selectedProject && (
          <div className="project-details">
            <div className="project-details-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            
            <div className="project-details-content">
              <Title level={3} className="project-details-title">
                {selectedProject.title}
              </Title>
              
              <Paragraph className="project-details-description">
                {selectedProject.longDescription}
              </Paragraph>
              
              <div className="project-details-section">
                <Title level={5}>Technologies Used:</Title>
                <div className="project-details-technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <Tag key={index} className="tech-tag">{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects; 