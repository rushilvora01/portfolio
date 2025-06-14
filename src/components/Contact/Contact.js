import React, { useEffect, useRef, useState } from 'react';
import { Typography, Row, Col, Form, Input, Button, Card, message } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import portfolioData from '../../data/portfolioData';
import { initScrollReveal } from '../../utils/scrollReveal';
import './Contact.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    // Initialize EmailJS
    // Replace 'YOUR_EMAILJS_PUBLIC_KEY' with your actual EmailJS public key
    // emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  const onFinish = (values) => {
    setLoading(true);

    // IMPORTANT: Replace these with your actual EmailJS credentials from your dashboard
    // 1. Go to https://dashboard.emailjs.com/sign-up to create a free account
    // 2. Create a new Email Service (Gmail, Outlook, etc.)
    // 3. Create a new Email Template with variables: {{name}}, {{email}}, {{subject}}, {{message}}, {{to_email}}
    // 4. Get your Service ID, Template ID, and Public Key from the dashboard
    const serviceId = 'service_q7s46ti'; // e.g. 'service_abc123'
    const templateId = 'template_wckxkr8'; // e.g. 'template_xyz456'
    const publicKey = 'E5wlaUtyJaXajc4n0'; // e.g. 'ABC123DEF456GHI'

    // Add recipient email to the template parameters
    const templateParams = {
      ...values,
      to_email: 'rushil.vora01@gmail.com',
      current_year: new Date().getFullYear()
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        message.success('Your message has been sent successfully!');
        form.resetFields();
        setLoading(false);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        message.error('Failed to send message. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="container">
        <section className="contact-section">
          <div className="section-header text-center reveal">
            <Title level={2} className="section-title">
              Get In Touch
            </Title>
            <Paragraph className="section-subtitle">
              Feel free to reach out if you have a project in mind, want to
              collaborate, or just want to say hello!
            </Paragraph>
          </div>

          <Row gutter={[40, 40]} className="contact-content">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="contact-form-container reveal"
              >
                <Card className="contact-card">
                  <Title level={4} className="card-title">
                    Send Me A Message
                  </Title>
                  <Form
                    name="contact"
                    layout="vertical"
                    onFinish={onFinish}
                    className="contact-form"
                    form={form}
                    ref={formRef}
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: 'Please enter your name' },
                      ]}
                    >
                      <Input
                        placeholder="Your Name"
                        size="large"
                        className="form-input"
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        {
                          type: 'email',
                          message: 'Please enter a valid email',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Your Email"
                        size="large"
                        className="form-input"
                      />
                    </Form.Item>

                    <Form.Item
                      name="subject"
                      rules={[
                        { required: true, message: 'Please enter a subject' },
                      ]}
                    >
                      <Input
                        placeholder="Subject"
                        size="large"
                        className="form-input"
                      />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your message',
                        },
                      ]}
                    >
                      <TextArea
                        placeholder="Your Message"
                        rows={6}
                        className="form-input"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="submit-btn"
                        icon={<SendOutlined />}
                        loading={loading}
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </motion.div>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="contact-info-container reveal delay-1"
              >
                <Card className="contact-card info-card">
                  <Title level={4} className="card-title">
                    Contact Information
                  </Title>
                  <Paragraph className="info-description">
                    I'm open for freelance projects and full-time opportunities.
                    Feel free to reach out using the contact information below.
                  </Paragraph>

                  <div className="contact-info">
                    <div className="info-item">
                      <div className="info-icon-box">
                        <MailOutlined className="info-icon" />
                      </div>
                      <div className="info-text">
                        <div className="info-label">Email</div>
                        <div className="info-value">
                          <a href={`mailto:${portfolioData.contact.email}`}>
                            {portfolioData.contact.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="info-icon-box">
                        <PhoneOutlined className="info-icon" />
                      </div>
                      <div className="info-text">
                        <div className="info-label">Phone</div>
                        <div className="info-value">
                          <a href={`tel:${portfolioData.contact.phone}`}>
                            {portfolioData.contact.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="info-icon-box">
                        <EnvironmentOutlined className="info-icon" />
                      </div>
                      <div className="info-text">
                        <div className="info-label">Location</div>
                        <div className="info-value">
                          {portfolioData.contact.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="social-links">
                    <Title level={5} className="social-title">
                      Connect With Me
                    </Title>
                    <div className="social-icons">
                      <motion.a
                        href={portfolioData.contact.socialMedia.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                      >
                        <GithubOutlined className="social-icon" />
                      </motion.a>
                      <motion.a
                        href={portfolioData.contact.socialMedia.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                      >
                        <LinkedinOutlined className="social-icon" />
                      </motion.a>
                      <motion.a
                        href={portfolioData.contact.socialMedia.twitter}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                      >
                        <TwitterOutlined className="social-icon" />
                      </motion.a>
                    </div>
                  </div>
                </Card>

                <div className="map-container reveal delay-2">
                  <iframe
                    title="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918078266!2d72.41493407603255!3d23.02015808862793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1744109347074!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default Contact;
