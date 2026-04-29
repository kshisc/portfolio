export const siteConfig = {
	name: 'Kyra Shi Engineering Portfolio',
	description:
		'A website showcasing my engineering projects.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'Projects',
			href: '/projects',
		}
	],
	links: {
		github: 'https://github.com/kshisc',
		linkedin: 'https://www.linkedin.com/in/kyra-shi-b8622b253',
		email: 'mailto:kyrashi@usc.edu',
	},
};

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	video: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Embedded Speedometer',
		description:
			'Measures the speed of a passing object using phototransistors and interrupt-driven timers',
		image: '/assets/images/ee109_project.jpg',
		tags: ['Embedded C', 'AVR/Arduino', 'Timers', 'Interrupts', 'PWM', 'UART', 'Oscilloscope', 'DMM'],
		video: '/assets/videos/ee109_project.mp4',
		repo: 'https://github.com/kshisc/EE109_Project',
	},
	{
		title: 'IoT Environment Monitor',
		description:
			'Streams Raspberry Pi sensor data to AWS SiteWise and uses a simple ML model to dynamically update a Flask web page',
		image: '/assets/images/ee250_project.jpg',
		tags: ['Python', 'Raspberry Pi', 'AWS IoT', 'Flask', 'Machine Learning'],
		video: '/assets/videos/ee250_project.mp4',
		repo: 'https://github.com/kshisc/EE250_Project',
	},
	{
		title: 'Bioadaptive Pulse-synced Music (BPM)',
		description:
			'Uses real-time heart rate data to dynamically adjust music playback',
		image: '/assets/images/tac348_project.jpg',
		tags: ['C++', 'Particle Photon', 'Initial State', 'Blynk', 'Fritzing'],
		video: '/assets/videos/tac348_project.mp4',
		repo: 'https://github.com/kshisc/TAC348_Project',
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
		field: 'Computer Engineering and Computer Science',
		institution: 'University of Southern California',
		location: 'Los Angeles, CA',
		startDate: 'Aug 2023',
		endDate: 'Present',
		gpa: '3.77/4.0',
		achievements: [
			'Presidential Scholar',
			'Viterbi Dean\'s List'
		],
	},
];
