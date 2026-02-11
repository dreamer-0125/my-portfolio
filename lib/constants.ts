export const siteConfig = {
	name: 'Andy Adams - Full Stack Engineer',
	description:
		'Full Stack engineer with 5 years of experience architecting and deploying end-to-end solutions that seamlessly integrate ML models into production-ready web applications.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		telegram: 'https://t.me/catchdream0',
		whatsapp: 'https://wa.me/12512880179',
		email: 'mailto:catchdream125@gmail.com',
		phone: 'tel:+12512880179',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Full-Stack Developer',
		company: 'Kibernum',
		location: 'Remote',
		startDate: 'June 2023',
		endDate: 'Dec 2025',
		description: [
			'Designed and implemented a real-time monitoring and alerting system using Kafka and Redis Streams, improving incident detection by 30% and preventing API failures during peak traffic',
			'Developed a job scheduling and orchestration system using Golang, managing distributed tasks and ensuring fault tolerance, increasing job processing efficiency by 25% in the logistics sector',
			'Implemented Kubernetes-based autoscaling with Horizontal Pod Autoscaler (HPA) and Cluster Autoscaler, optimizing cloud resource utilization by 40% across diverse cloud environments',
			'Built and maintained a billing system using Java and Spring Boot, processing thousands of transactions per day and ensuring real-time financial data accuracy for clients in the finance industry',
			'Optimized cloud costs by migrating serverless workloads to Azure Functions and AWS Lambda, reducing infrastructure expenses by 20%',
			'Built distributed caching mechanisms with Redis and Memcached, reducing database query load by 35%',
			'Designed and optimized NoSQL and SQL databases including MongoDB (Atlas, GridFS), Cassandra, DynamoDB, and MySQL, improving data retrieval performance by 30%',
			'Developed a high-throughput data pipeline with Apache Spark, Kafka, and Delta Lake, enabling real-time data analytics and supporting data-driven decision-making',
		],
		technologies: ['Golang', 'Java', 'Spring Boot', 'Kafka', 'Redis', 'Kubernetes', 'AWS Lambda', 'Azure Functions', 'MongoDB', 'Cassandra', 'DynamoDB', 'MySQL', 'Apache Spark', 'Delta Lake'],
	},
	{
		title: 'Fullstack Software Engineer',
		company: 'Ambience',
		location: 'Remote',
		startDate: 'Feb 2022',
		endDate: 'May 2023',
		description: [
			'Built HIPAA-compliant APIs, microservices and data pipelines to process ambient audio transcription, generate specialty-aware clinical notes and support point-of-care coding suggestions',
			'Implemented responsive, clinician-friendly interfaces and real-time capabilities to reduce administrative burden, enabling faster note generation and improved accuracy in high-volume care settings',
			'Collaborated with AI/ML engineers, product and clinical stakeholders in agile sprints to iterate on features based on pilot feedback from healthcare providers',
			'Optimized application performance through caching (Redis), query tuning and efficient data handling, supporting scalable usage across growing user bases in ambulatory and inpatient environments',
		],
		technologies: ['Python', 'JavaScript', 'TypeScript', 'Redis', 'Microservices', 'HIPAA Compliance', 'AI/ML Integration'],
	},
	{
		title: 'Software Developer',
		company: 'Bloom Energy',
		location: 'San Jose, CA',
		startDate: 'Feb 2021',
		endDate: 'Jan 2022',
		description: [
			'Contributed to enterprise-grade software systems supporting clean energy and power generation platforms',
			'Developed backend services and internal tools using Python, JavaScript and SQL',
			'Worked within a microservices architecture, supporting data pipelines and system integrations',
			'Assisted in monitoring, debugging, and resolving production issues to maintain system reliability',
			'Followed secure coding practices and enterprise development standards',
			'Gained experience working with large-scale, mission-critical systems in a regulated environment',
		],
		technologies: ['Python', 'JavaScript', 'SQL', 'Microservices', 'Data Pipelines'],
	},
	{
		title: 'Software Engineer Intern',
		company: 'Innovative Defense Technologies (IDT)',
		location: 'San Diego, CA',
		startDate: 'June 2020',
		endDate: 'Jan 2021',
		description: [
			'Assisted in the design, development, testing, deployment of internal software applications to support energy system operations, manufacturing workflows and business intelligence needs',
			'Wrote clean, efficient and documented code in languages such as Python, JavaScript/TypeScript, contributing to tools for data processing, reporting and automation',
			'Participated in incident management and post-mortem reviews, identifying key bottlenecks in system performance and contributing to the implementation of performance optimizations that reduced latency by 15%',
			'Supported troubleshooting and resolution of software issues in production-like internal systems, including data pipelines and monitoring tools for fuel cell performance metrics',
		],
		technologies: ['Python', 'JavaScript', 'TypeScript', 'Data Processing', 'Automation'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Decentralized Voting System',
		description:
			"The Decentralized Voting System using Ethereum Blockchain is a secure and transparent solution for conducting elections. Leveraging Ethereum's blockchain technology, this system ensures tamper-proof voting records, enabling users to cast their votes remotely while maintaining anonymity and preventing fraud.",
		image: '',
		tags: ['Web3.js', 'JavaScript', 'Solidity', 'React'],
		link: '#',
		repo: '#',
	},
	{
		title: 'FitTrack : Cross-Platform Fitness App',
		description:
			'Developed a health-tracking mobile app using React Native and Firebase.Integrated real-time analytics and social features for fitness challenges.Supported push notifications and wearable device synchronization.',
		image: '',
		tags: ['React Native', 'Firebase', 'TypeScript'],
		link: '#',
		repo: '#',
	},
	{
		title: 'ShopSwift : E-Commerce Web Platform',
		description:
			'Full-stack e-commerce solution with real-time order tracking, product management, and payment gateway integration. Integrated Stripe and PayPal APIs for secure transactions.',
		image: '',
		tags: ['MongoDB', 'Express', 'React', 'Node.js'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Mathematics-Computer Science',
		institution: 'University of California, San Diego',
		location: 'San Diego, CA',
		startDate: 'Sep 2016',
		endDate: 'May 2020',
		achievements: [],
	}
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Full Stack Development', level: 10, category: 'technical' },
	{ name: 'Microservices Architecture', level: 9, category: 'technical' },
	{ name: 'Cloud Infrastructure', level: 9, category: 'technical' },
	{ name: 'Data Pipelines & ETL', level: 9, category: 'technical' },
	{ name: 'Database Design & Optimization', level: 9, category: 'technical' },
	{ name: 'ML Model Integration', level: 8, category: 'technical' },

	// Software Skills
	{ name: 'Python', level: 9, category: 'software' },
	{ name: 'JavaScript / TypeScript', level: 10, category: 'software' },
	{ name: 'Java / Spring Boot', level: 9, category: 'software' },
	{ name: 'Golang', level: 8, category: 'software' },
	{ name: 'SQL', level: 9, category: 'software' },
	{ name: 'AWS Lambda', level: 9, category: 'software' },
	{ name: 'Azure Functions', level: 9, category: 'software' },
	{ name: 'Kafka', level: 9, category: 'software' },
	{ name: 'Redis / Memcached', level: 9, category: 'software' },
	{ name: 'Kubernetes', level: 9, category: 'software' },
	{ name: 'MongoDB / DynamoDB / Cassandra', level: 9, category: 'software' },
	{ name: 'Apache Spark', level: 8, category: 'software' },
	{ name: 'GitHub Actions / Jenkins', level: 9, category: 'software' },
	{ name: 'Supabase', level: 8, category: 'software' },
	{ name: 'AI/ML / LLMs', level: 7, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 10, category: 'soft' },
	{ name: 'Collaboration', level: 9, category: 'soft' },
	{ name: 'Adaptability', level: 9, category: 'soft' },
	{ name: 'System Architecture', level: 9, category: 'soft' },
	{ name: 'Performance Optimization', level: 9, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};
