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
		},
	},
};
