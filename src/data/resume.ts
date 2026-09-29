export type ExperienceEntry = {
  role: string
  company: string
  location: string
  dates: string
  highlights: string[]
}

export type SkillGroup = {
  category: string
  skills?: string[]
  subsections?: Array<{
    title: string
    skills?: string[]
    wide?: boolean
    businesses?: Array<{
      name: string
      role: string
      dates: string
      skills: string[]
    }>
  }>
}

export type EducationEntry = {
  credential: string
  institution: string
  location: string
  completed: string
  details?: string[]
  documentImage?: string
  documentAlt?: string
}

export type CertificationEntry = {
  credential: string
  issuer: string
  completed: string
  details: string[]
  documentImage?: string
  documentAlt?: string
  documentSummary?: string[]
  documents?: Array<{
    label: string
    image: string
    alt: string
  }>
}

export type MilitaryServiceEntry = {
  role: string
  organization: string
  location: string
  dates: string
  highlights: string[]
  documentImage?: string
  documentAlt?: string
  documentDownload?: string
}

// This is the website's single source of truth for résumé content.
// Update these entries whenever the résumé changes; the Experience, Education,
// Certifications, Military Service, and Skills sections render from this file.
export const professionalExperience: ExperienceEntry[] = [
  {
    role: 'Automotive Instructor',
    company: 'Universal Technical Institute',
    location: 'Bloomfield, NJ',
    dates: 'Dec 2025 – Present',
    highlights: [
      'Deliver classroom and hands-on lab instruction in automotive diagnostics, electrical systems, fuel systems, drivability, and professional shop practices.',
      'Manage classroom/lab activities, student groups, safety, attendance, assessments, and differentiated instruction across multiple workstations.',
      'Use Blackboard to organize coursework, assignments, grades, feedback, and student progress while coaching diagnostic strategy, documentation, and professional communication.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Innovative Defense Technologies',
    location: 'Mount Laurel, NJ',
    dates: 'Feb 2023 – Jan 2025',
    highlights: [
      'Collaborated with senior engineers on full-stack and CI/CD development supporting secure automation pipelines through Jenkins, Trivy, Coverity, and Jira/Confluence.',
      'Engineered and maintained secure React applications with TypeScript and JavaScript.',
      'Built CI/CD pipelines integrating security scans with Jenkins, Trivy, and Coverity.',
      'Directed Linux server administration and Dockerized environments for mission-critical systems.',
      'Migrated infrastructure from CentOS 7 to RHEL 10, improving reliability and patch compliance.',
      'Automated reporting workflows and supported Agile sprint planning with technical leads.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Innovative Defense Technologies',
    location: 'Mount Laurel, NJ',
    dates: 'May 2022 – Aug 2022',
    highlights: [
      'Integrated Java, C++, and TypeScript components into automated testing systems.',
      'Solved versioning and library conflicts across compilation environments.',
      'Collaborated with senior engineers and mentors in a team-oriented Agile workflow.',
    ],
  },
  {
    role: 'IT Intern',
    company: 'EMD Electronics',
    location: 'Branchburg, NJ',
    dates: 'Jun 2021 – Aug 2021',
    highlights: [
      'Coordinated packaging for 96 software applications in 10 weeks.',
      'Imaged and deployed 170+ workstations across manufacturing and HQ sites.',
      'Analyzed encryption compliance and supported IT audit remediation efforts.',
      'Collaborated with SCCM and EUS teams to improve asset tracking and deployment.',
    ],
  },
  {
    role: 'Automotive Technician & Diagnostic Specialist',
    company: 'Dealership and Independent Automotive Service',
    location: 'New Jersey & South Carolina',
    dates: '2004 – 2019',
    highlights: [
      'Diagnosed and repaired electrical, drivability, engine-performance, fuel, brake, steering and suspension, and HVAC systems.',
      'Specialized in European vehicles beginning in 2013, with particular experience in Audi and Volkswagen vehicles and in electrical and hybrid systems.',
      'Owned and operated Auto Diagnostic Services LLC in South Carolina from January 2011 through December 2012, managing diagnostics, repairs, customer relationships, estimates, and scheduling.',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    credential: 'Bachelor of Arts in Computing and Informatics',
    institution: 'Rowan University',
    location: 'Glassboro, NJ',
    completed: 'January 2023',
    details: [
      'Magna Cum Laude',
      'GPA: 3.83',
      'Dean’s List — Fall 2021 and Spring 2022',
      'President’s List — Fall 2022',
      '4.0 final semester',
      'Minor in Computer Science',
    ],
    documentImage: '/credentials/rowan-ba-computing-informatics-2022.jpg',
    documentAlt:
      'Rowan University Bachelor of Arts diploma in Computing and Informatics, Magna Cum Laude',
  },
  {
    credential: 'Associate of Science in Computer Science',
    institution: 'Brookdale Community College',
    location: 'Lincroft, NJ',
    completed: 'December 2020',
    details: ['GPA: 3.26', 'Dean’s List — Spring 2020', '4.0 Spring 2020 semester'],
    documentImage: '/credentials/brookdale-associate-science-2020.jpeg',
    documentAlt: 'Brookdale Community College Associate in Science diploma issued in 2020',
  },
  {
    credential: 'Automotive Technician Certificate',
    institution: 'Lincoln Technical Institute',
    location: 'Union, NJ',
    completed: 'December 2005',
    details: ['High Honors', 'GPA: 4.0'],
  },
]

export const certifications: CertificationEntry[] = [
  {
    credential: '120-Hour Premier Online TEFL / TESOL Course',
    issuer: 'The TEFL Org',
    completed: 'September 2026',
    details: [
      'Internationally recognized TEFL / TESOL certification',
      'Grammar, teaching methodology, classroom observation, large-class instruction, and remote learning',
    ],
  },
  {
    credential: 'ASE Certifications and Advanced Credentials',
    issuer: 'National Institute for Automotive Service Excellence (ASE)',
    completed: 'Updated 2026',
    details: [
      'G1 — Auto Maintenance and Light Repair',
      'A5 — Brakes',
      'A6 — Electrical/Electronic Systems',
      'A7 — Heating & Air Conditioning',
      'A8 — Engine Performance; recertification examination passed January 28, 2026',
      'L1 — Advanced Engine Performance Specialist; examination passed April 15, 2026',
    ],
    documents: [
      {
        label: 'View A8 recertification report',
        image: '/credentials/ase-a8-redacted.png',
        alt: 'Privacy-redacted ASE A8 Engine Performance recertification passing report',
      },
      {
        label: 'View L1 examination report',
        image: '/credentials/ase-l1-redacted.png',
        alt: 'Privacy-redacted ASE L1 Advanced Engine Performance Specialist passing report',
      },
    ],
  },
  {
    credential: 'Technician — Registered',
    issuer: 'Audi Academy',
    completed: '2018',
    details: ['Completed Audi Academy training requirements for registered technician status'],
    documentImage: '/credentials/audi-technician-registered-2018.jpg',
    documentAlt: 'Audi Academy Technician Registered certificate issued in 2018',
  },
  {
    credential: 'Inventor for Beginners',
    issuer: 'SolidProfessor',
    completed: 'March 2018',
    details: [
      'Autodesk Inventor fundamentals: parametric modeling, sketches, assemblies, 3D models, and production-ready 2D drawings',
    ],
    documentImage: '/credentials/inventor-for-beginners-2018.jpg',
    documentAlt: 'SolidProfessor Inventor for Beginners technical certificate issued in 2018',
  },
  {
    credential: 'Personal Fitness Trainer Certification',
    issuer:
      'American Aerobic Association International / International Sports Medicine Association',
    completed: 'October 2017 – October 2019',
    details: ['Previously certified; credential expired in October 2019'],
  },
  {
    credential: 'Service Technician',
    issuer: 'Audi Academy',
    completed: '2015',
    details: ['Completed Audi Academy training requirements for service technicians'],
    documentImage: '/credentials/audi-service-technician-2015.jpg',
    documentAlt: 'Audi Academy Service Technician certificate issued in 2015',
  },
  {
    credential: 'BMW Body Electronics IV',
    issuer: 'WORLDPAC Training Institute',
    completed: 'November 2015',
    details: ['Completed 16 hours of technical training in BMW body electronics'],
    documentImage: '/credentials/bmw-body-electronics-iv-2015.jpg',
    documentAlt: 'WORLDPAC Training Institute BMW Body Electronics IV certificate issued in 2015',
  },
]

export const militaryService: MilitaryServiceEntry[] = [
  {
    role: 'Avionics Mechanic (68N10)',
    organization: 'Army National Guard',
    location: 'Ewing, NJ',
    dates: 'June 1996 – 1999',
    highlights: [
      'Trained in and performed electrical wiring diagnosis and repair on helicopter systems.',
    ],
    documentImage: '/credentials/proof-of-service-redacted.png',
    documentAlt: 'Redacted Department of Veterans Affairs proof of honorable Army service',
    documentDownload: '/credentials/proof-of-service-redacted.pdf',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Teaching',
    skills: [
      'Classroom/lab management',
      'Curriculum delivery',
      'Lesson planning',
      'Student engagement',
      'Assessment/grading',
      'Coaching/mentoring',
      'Safety',
      'Differentiated instruction',
    ],
  },
  {
    category: 'Computer Science Foundations',
    skills: [
      'Object-oriented programming',
      'Data structures and algorithms',
      'Database systems',
      'SQL',
      'Computer networks and data communications',
      'Information security',
      'Human-computer interaction',
      'Web development',
      'Computer organization',
      'Computer architecture and assembly language',
      'Computer logic and design',
      'Operating systems',
      'Systems analysis and design',
      'Software project development',
      'Engineering graphics and CAD',
      'Programming language concepts',
      'Scientific programming',
    ],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'HTML/CSS', 'LaTeX'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Flask', 'Django', 'Node.js', 'Bootstrap', 'WordPress'],
  },
  {
    category: 'DevOps',
    skills: ['Jenkins', 'Docker', 'Kubernetes', 'Trivy', 'Coverity', 'nginx', 'gunicorn'],
  },
  {
    category: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub Actions', 'Jira', 'Confluence', 'Blackboard'],
  },
  {
    category: 'Platforms',
    skills: ['RHEL', 'Ubuntu', 'CentOS', 'Windows'],
  },
  {
    category: 'AI Tools',
    skills: ['ChatGPT', 'Google Gemini', 'GitHub Copilot'],
  },
  {
    category: 'Automotive',
    skills: [
      'Advanced diagnostics',
      'Electrical and electronic systems',
      'Wiring diagnosis and repair',
      'Hybrid vehicle systems',
      'Engine performance',
      'Drivability diagnostics',
      'Fuel and ignition systems',
      'Brake systems',
      'Steering and suspension',
      'Heating and air conditioning',
      'Scan-tool diagnostics',
      'Oscilloscope and waveform analysis',
      'Compression testing',
      'Fuel-injector testing',
      'Residual fuel-pressure testing',
      'Preventive maintenance',
      'Shop safety and procedures',
      'Automotive technical instruction',
    ],
  },
  {
    category: 'Additional Expertise',
    subsections: [
      {
        title: 'Entrepreneurship & Business Ownership',
        wide: true,
        businesses: [
          {
            name: 'CodeDiggs LLC',
            role: 'Founder',
            dates: '2026–present',
            skills: [
              'Business formation and administration',
              'Software product strategy and planning',
              'Brand, website, and online-presence management',
            ],
          },
          {
            name: 'Auto Diagnostic Services LLC',
            role: 'Owner/operator',
            dates: '2011–2012',
            skills: [
              'Mobile automotive-service business operations',
              'Customer intake, estimates, scheduling, and invoicing',
              'Client relationships and workflow management',
            ],
          },
          {
            name: 'Dezots Club Car Cafe',
            role: 'Co-owner/operator',
            dates: '2002',
            skills: [
              'Daily deli and food-service business operations',
              'Staffing and workflow management',
              'Menu planning and design',
              'Purchasing, vendor coordination, and inventory control',
            ],
          },
          {
            name: 'John Giles Personal Training',
            role: 'Owner/operator',
            dates: '2000',
            skills: [
              'Mobile personal-training business operations',
              'Client acquisition, scheduling, and retention',
              'Service planning and customer relations',
            ],
          },
          {
            name: 'The Sudsy Hussie LLP',
            role: 'Co-owner/operator',
            dates: '2021',
            skills: [
              'E-commerce operations and online sales',
              'Product branding, packaging, and marketing',
              'Manufacturing infrastructure and workflow setup',
              'Inventory, order-fulfillment, and shipping management',
            ],
          },
        ],
      },
      {
        title: 'Knowledge & Analytical',
        skills: [
          'Oceanography and marine science fundamentals',
          'Geometry, trigonometry, and calculus',
          'Physics and mechanical principles',
          'Economics and analytical reasoning',
          'Psychology and human behavior fundamentals',
          'Research writing and composition',
          'History and global studies',
          'Team leadership and mentoring',
        ],
      },
      {
        title: 'Practical & Hands-On',
        skills: [
          'Construction, maintenance, and hands-on problem-solving',
          'Residential framing',
          'High- and low-voltage electrical installation and trim-out',
          'Window and door installation',
          'Landscaping and garden design',
          'Planting, cultivation, and harvesting',
          'Landscape site and grounds maintenance',
          'Seasonal landscape maintenance',
          'Commercial-vehicle detailing, including dump-truck cleaning and polishing',
          'Tool and equipment operation',
          'Cooking, food preparation, and production',
          'Commercial kitchen cleaning and sanitation',
          'Table service and customer care',
          'Personal training, coaching, and motivation',
          'First aid and CPR fundamentals',
          'Workplace safety and compliance',
        ],
      },
    ],
  },
]
