import reactIcon from '../../assets/icons/react.svg';
import nextIcon from '../../assets/icons/nextjs.svg';
import angularIcon from '../../assets/icons/angular.svg';
import vueIcon from '../../assets/icons/vue.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import expressIcon from '../../assets/icons/express.svg';
import dockerIcon from '../../assets/icons/docker.svg';

import leatmeAskImage from '../../assets/images/projects/leatmeask.png';
import proffyImage from '../../assets/images/projects/proffy.png';
import escalaImage from '../../assets/images/projects/escala.png';
import dtMoneyImage from '../../assets/images/projects/dtMoney.png';
import userManagementImage from '../../assets/images/projects/userManagement.png';

export default {
	translations: {
		home: {
			header: {
				aboutMeTitle: 'About Me',
				careerTitle: 'Career',
				skillsTitle: 'Skills',
				projectsTitle: 'Projects',
			},
			showCaseContent: {
				ocupation: 'Front End Developer',
			},
			contactList: {
				resumeTitle: 'Resume',
			},
			aboutMe: {
				firstParagraph: `Currently I'm focused on skills as an enhanced Front End Developer, and some${' '}
				                 SoftSkills that allow me to be a better Developer: Effective Communication,${' '}
												 Leadership...I've also been focusing on English, I'm taking the course at${' '}
												 Wise Up.`,
				secondParagraph: `I'm studying Computer Science at Anhembi Morumbi, and I'm a Technician in Systems
				                  Development at Etec de Embu.`,
			},
			ocupation: {
				list: [
					{
						id: 1,
						title: 'Front End Developer',
						fromTo: 'may. 2021 – to moment',
						company: 'D1 - Digital Journeys',
						description: [
							{
								id: 1,
								text: `I work using the Scrum methodology in developing new features,
								solving Bugs and testing a platform that has the objective of generating
								document design and implementation of digital journeys and chatbots`,
							},
							{
								id: 2,
								text: `During the day I use: NextJS + TypeScript + Redux Saga + Context API + Styled Components,
								for testing we use Cypress(e2e), Jest(unitary), we also implement jsDocs to comment the purpose of functions,
								we apply conventional commits to keep the commits succinct, I also take care of some libs,
								From components, tokens, icons... I also from Hotjar/Google Analytics along with the rest of the
								front`,
							},
						],
					},
					{
						id: 2,
						title: 'Front End Developer',
						fromTo: 'feb. 2021 – aug. 2021 - 7 months',
						company: 'NovaHaus',
						description: [
							{
								id: 1,
								text: `I worked with Angular on a project for Gol, using atomic design, well-css, and at the
								same time Unlike Mobile First, we created the web and then adapted it for mobile as well.
								we performed tests on other browsers to see if they behaved correctly using
								Cross Browser, Kanban was adopted to control the workflow, and the design was
								consulted through Zeplin.`,
							},
							{
								id: 2,
								text: `I participated in the development of the polyhedron's intranet, using Next with TypeScript, +
								Context to share states, docker, Material UI... And layouts were queried +
								in Figma, the design was built using grid, and to reflect this on the screen we used the +
								Grid component of the Material UI.`,
							},
						],
					},
					{
						id: 3,
						title: 'Full Stack Developer',
						fromTo: 'sep 2020 - jan 2021 - 5 months',
						company: 'NWB - Network Brazil',
						description: [
							{
								id: 1,
								text: `I developed a voting site for the Desimpedidos channel, and an interface for
											present all this data to the company.`,
							},
							{
								id: 2,
								text: `I participated in the development of Xtrala(EJS/ React Native) a platform that brings
								fans/talents, where the user can buy videos of the desired talent, I also did the
								application to list talent requests, show the statement, record and send the
								videos for the user.`,
							},
							{
								id: 3,
								text: `I developed updates on the company's website using Angular, creating new screens and
								improving the old, I also started to insert an accounting system.`,
							},
						],
					},
				],
			},
			skills: {
				title: 'Skills',
				titleLevel: 'Level',
				list: [
					{
						id: 1,
						icon: reactIcon,
						link: 'https://pt-br.reactjs.org/',
						title: 'ReactJS',
						level: 'Advanced',
					},
					{
						id: 2,
						icon: reactIcon,
						link: 'https://reactnative.dev/',
						title: 'React Native',
						level: 'Intermediary',
					},
					{
						id: 3,
						icon: nextIcon,
						link: 'https://nextjs.org/',
						title: 'NextJS',
						level: 'Advanced',
					},
					{
						id: 4,
						icon: angularIcon,
						link: 'https://angular.io/',
						title: 'Angular',
						level: 'Basic',
					},
					{
						id: 5,
						icon: vueIcon,
						link: 'https://vuejs.org/',
						title: 'VueJS',
						level: 'Basic',
					},
					{
						id: 6,
						icon: nodeIcon,
						link: 'https://nodejs.org/en/',
						title: 'NodeJs',
						level: 'Intermediary',
					},
					{
						id: 7,
						icon: expressIcon,
						link: 'https://expressjs.com/pt-br/',
						title: 'Express',
						level: 'Basic',
					},
					{
						id: 8,
						icon: dockerIcon,
						link: 'https://www.docker.com/',
						title: 'Docker',
						level: 'Basic',
					},
				],
			},
			projects: {
				title: 'Projects',
				list: [
					{
						id: 1,
						title: 'LeatmeAsk',
						img: leatmeAskImage,
						description: `LeatMeask is for people who produce content, assists in
						control of questions during lives... Making it much easier
						interact with your audience.`,
						listLink: [
							{
								id: 1,
								name: 'GitHub',
								link: 'https://github.com/Joaobru/Leatmeask',
							},
							{
								id: 2,
								name: 'Projects',
								link: 'https://leatmeask-4458b.firebaseapp.com/',
							},
						],
					},
					{
						id: 2,
						title: 'Proffy',
						img: proffyImage,
						description: `
						Proffy is a platform that aims to facilitate the connection between students and
						teachers, giving teachers the possibility to register their
						classes specifying the subject, times, days...`,
						listLink: [
							{
								id: 1,
								name: 'GitHub',
								link: 'https://github.com/Joaobru/Proffy',
							},
							{
								id: 2,
								name: 'Projects',
								link: 'https://stupefied-turing-6a35f2.netlify.app/',
							},
						],
					},
					{
						id: 3,
						title: 'Escala',
						img: escalaImage,
						description: `The project was developed for the CCR 2.0 Hackaton by group 25,
						we developed an application with Gamefication system to
						decrease the school dropout rate.`,
						listLink: [
							{
								id: 1,
								name: 'GitHub',
								link: 'https://github.com/Joaobru/Escala',
							},
						],
					},
					{
						id: 4,
						title: 'DtMoney',
						img: dtMoneyImage,
						description: `This project was developed for educational purposes, with it I met
						the MirageJS tool, and honed my Context API skills
						and Styled Components.`,
						listLink: [
							{
								id: 1,
								name: 'GitHub',
								link: 'https://github.com/Joaobru/DtMoney',
							},
						],
					},
					{
						id: 5,
						title: 'Gerenciamento de Usuários',
						img: userManagementImage,
						description: `This project was developed with the aim of improving my
						Front End/Back End skills, for manipulating a user,
						being possible to create, list, edit and delete.`,
						listLink: [
							{
								id: 1,
								name: 'GitHub',
								link: 'https://github.com/Joaobru/Gerenciamento-de-usuarios',
							},
						],
					},
				],
			},
		},
	},
};
