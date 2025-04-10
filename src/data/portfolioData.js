// Portfolio data
import { RESUME_VIEW_URL, RESUME_DOWNLOAD_URL } from '../utils/constants';

const portfolioData = {
  // About section
  about: {
    name: 'Rushil Vora',
    title: 'Full Stack Engineer',
    description:
      "I'm a passionate Full Stack Engineer with expertise in modern web technologies. I love creating responsive, user-friendly applications that solve real-world problems. With a strong foundation in both frontend and backend development, I bring ideas to life through clean, efficient code.",
    longDescription:
      "I have over 2 years of experience in the tech industry, working with a variety of technologies and frameworks. My approach to development focuses on creating scalable, maintainable solutions that deliver exceptional user experiences. I'm always eager to learn new technologies and stay updated with the latest trends in the industry. Beyond coding, I enjoy contributing to open-source projects and sharing my knowledge through technical writing and mentoring.",
    photo: '/profile-photo.jpg', // Add your photo to the public folder
    location: 'Ahmedabad, Gujarat, India',
    email: 'rushil.vora01@gmail.com',
    phone: '+91 7575010701',
    resumeViewUrl: RESUME_VIEW_URL,
    resumeDownloadUrl: RESUME_DOWNLOAD_URL,
  },

  // Skills section
  skills: [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Redux', level: 90 },
        { name: 'Next.js', level: 75 },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'Django Rest Framework', level: 75 },
        { name: 'REST API', level: 85 },
      ],
    },
    {
      category: 'Database & DevOps',
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Docker', level: 50 },
        { name: 'AWS', level: 40 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 50 },
      ],
    },
  ],

  // Projects section
  projects: [
    {
      id: 1,
      title: 'E-Connect Demo Platform',
      description: 'A Shopify application allowing stores to connect guests with real customers for product demonstrations.',
      longDescription: 'Developed a full-stack solution for e-commerce stores that enables potential customers to request live product demonstrations from existing customers. Built with React frontend and Django REST Framework backend, this application features a custom admin portal for analytics, scheduling management, and integrated payment processing. The platform incorporates real-time video conferencing capabilities and detailed analytics dashboards.',
      technologies: ['React', 'Django REST Framework', 'PostgreSQL', 'AWS Transcribe', 'Zego Cloud', 'Dots Payment Gateway'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'PianoMaster Learning Platform',
      description: 'A comprehensive piano learning application connecting students with approved teachers for online lessons.',
      longDescription: 'Designed and developed an interactive piano teaching platform that enables teachers to register, undergo approval processes, and then offer lessons to enrolled students. The application features scheduling functionality, integrated video lessons, progress tracking, and secure payment processing. As the lead frontend developer, I focused on creating an intuitive, responsive UI that enhances the learning experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Learning Management System'],
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'LinkedIn Assistant Extension',
      description: 'A Chrome extension that enhances LinkedIn networking by scraping profile data and automating conversations with AI.',
      longDescription: 'Created a powerful Chrome extension that scrapes LinkedIn user profile data and leverages ChatGPT to help users initiate or respond to conversations. The tool streamlines networking efforts by providing AI-powered message suggestions based on profile information, helping users connect more effectively and professionally with their network. Built entirely with React for a seamless browser experience.',
      technologies: ['React', 'Chrome Extension API', 'Web Scraping', 'ChatGPT Integration', 'OAuth'],
      image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'JIRA Project Analytics',
      description: 'A project tracking application that integrates with JIRA to provide comprehensive team analytics and progress monitoring.',
      longDescription: 'Developed a robust analytics platform that integrates with JIRA to track team progress across projects and epics. The application fetches detailed logs from JIRA and transforms them into actionable insights through interactive dashboards. Project managers can monitor team velocity, identify bottlenecks, and generate comprehensive reports to optimize workflow efficiency.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JIRA API', 'Chart.js', 'Data Visualization'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ],

  // Experience section
  experience: {
    title: "Experience",
    subtitle: "My professional journey",
    description: "I've had the opportunity to work with some amazing companies and teams.",
    items: [
      {
        title: "Software Engineer",
        company: "Growexx",
        period: "April 2024 - Present",
        location: "Ahmedabad, Gujarat, India",
        description: [
          "Work on a dedicated project involving direct client communication",
          "Implement clean React architecture"
        ],
        technologies: ["MongoDB", "TypeScript", "Client Communication", "PostgreSQL", "Django Rest Framework"]
      },
      {
        title: "Jr. Software Engineer",
        company: "Growexx",
        period: "August 2023 - March 2024",
        location: "Ahmedabad, Gujarat, India",
        description: [
          "Work with different teams on a diverse set of projects",
          "Full stack engineering, database designing"
        ],
        technologies: ["AntD", "JavaScript", "Unit Testing", "Agile", "Scrum"]
      },
      {
        title: "Jr. Software Engineer Intern",
        company: "Growexx",
        period: "January 2023 - July 2023",
        location: "Ahmedabad, Gujarat, India",
        description: [
          "Gained hands-on experience in software development",
          "Worked on real-world projects under mentorship"
        ],
        technologies: []
      },
      {
        title: "Full Stack Engineer",
        company: "Barodaweb",
        period: "May 2022 - July 2022",
        location: "Vadodra, Gujarat, India",
        description: [
          "Full stack development for assigned project modules",
          "Developed REST APIs and created frontend using MERN stack"
        ],
        technologies: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"]
      }
    ]
  },

  // Education section
  education: [
    {
      institution: 'University of California, Berkeley',
      degree: 'Master of Science in Computer Science',
      period: '2014 - 2016',
      description:
        'Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.',
      courses: [
        'Advanced Algorithms',
        'Machine Learning',
        'Database Systems',
        'Software Engineering Methodologies',
        'Computer Networks',
      ],
    },
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science in Computer Science',
      period: '2010 - 2014',
      description:
        'Focused on web development and data structures. Active member of the Computing Club.',
      courses: [
        'Data Structures and Algorithms',
        'Web Development',
        'Operating Systems',
        'Computer Architecture',
        'Object-Oriented Programming',
      ],
    },
    {
      institution: 'Udemy, Coursera, and other platforms',
      degree: 'Professional Certifications',
      period: '2016 - Present',
      description:
        'Continuously learning through online courses and certifications.',
      courses: [
        'AWS Certified Developer',
        'MongoDB University Certification',
        'React and Redux Masterclass',
        'Advanced JavaScript',
        'TypeScript Fundamentals',
      ],
    },
  ],

  // Contact information
  contact: {
    email: 'rushil.vora01@gmail.com',
    phone: '+91 7575010701',
    location: 'Ahmedabad, Gujarat, India',
    socialMedia: {
      github: 'https://github.com/rushilvora01',
      linkedin: 'https://linkedin.com/in/rushil-vora',
      twitter: 'https://x.com/VoraRushil',
    },
  },
};

export default portfolioData;
