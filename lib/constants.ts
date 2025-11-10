export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
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
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:youremail@example.com',
		phone: 'tel:+1234567890',
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
		title: 'Junior Web & Blockchain Developer',
		company: 'Freelance / Remote',
		location: 'California , USA',
		startDate: '2022',
		endDate: 'Present',
		description: [
			'Designed and built small-scale web and mobile apps using React.js, Node.js, and React Native',
			'Created and tested Ethereum smart contracts for personal DApp projects using Solidity and Hardhat',
			'Integrated wallet connectivity (MetaMask & WalletConnect) into simple blockchain applications',
			'Collaborated with other developers online in open-source blockchain and front-end projects',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Frontend Development Intern',
		company: 'TechNova Labs',
		location: 'California , USA',
		startDate: '2021',
		endDate: '2022',
		description: [
			'Supported the design and development of web apps using React.js and CSS frameworks',
			'Learned to consume RESTful APIs and display dynamic content efficiently',
			'Assisted in fixing bugs and improving user interfaces for client-facing projects',
			'Contributed to team sprints and learned agile methodologies in a collaborative startup environment',
		],
		technologies: ['React', 'Node.js', 'Data Analysis', 'Github'],
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
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['Web3.js', 'JavaScript', 'Solidity', 'React'],
		link: '#',
		repo: '#',
	},
	{
		title: 'FitTrack : Cross-Platform Fitness App',
		description:
			'Developed a health-tracking mobile app using React Native and Firebase.Integrated real-time analytics and social features for fitness challenges.Supported push notifications and wearable device synchronization.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['React Native', 'Firebase', 'TypeScript'],
		link: '#',
		repo: '#',
	},
	{
		title: 'ShopSwift : E-Commerce Web Platform',
		description:
			'Full-stack e-commerce solution with real-time order tracking, product management, and payment gateway integration. Integrated Stripe and PayPal APIs for secure transactions.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
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
		field: 'Computer Science',
		institution: 'University of California',
		location: 'San Diego, USA',
		startDate: 'Sep 2017',
		endDate: '2021',
		gpa: '3.8/4.0',
		achievements: [
			'Dean\'s List (All Semesters)',
			'Academic Excellence Scholarship',
			'Senior Design Project Award',
		],
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
	{ name: 'Mobile Development', level: 9, category: 'technical' },
	{ name: 'Structural Analysis', level: 8, category: 'technical' },
	{ name: 'Blockchain & Web3', level: 7, category: 'technical' },
	{ name: 'Databases', level: 8, category: 'technical' },
	{ name: 'Web Development', level: 9, category: 'technical' },

	// Software Skills
	{ name: 'Node.js  Next.js  React', level: 9, category: 'software' },
	{ name: 'Solidity  Web3.js  Ethers.js', level: 8, category: 'software' },
	{ name: 'Flutter  ReactNative  Kotlin', level: 9, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'C++  JavaScript  TypeScript', level: 10, category: 'software' },
	{ name: 'MongoDB  MySQL  Firebase', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 6, category: 'language' },
	{ name: 'Chinese', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};
