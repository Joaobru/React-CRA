export default {
	translations: {
		home: {
			header: {
				aboutMeTitle: 'Sobre Mim',
				careerTitle: 'Carreira',
				skillsTitle: 'Habilidades',
				projectsTitle: 'Projetos',
			},
			showCaseContent: {
				ocupation: 'Desenvolvedor Front End',
			},
			contactList: {
				resumeTitle: 'Currículo',
			},
			aboutMe: {
				firstParagraph: `Atualmente eu estou focado em aprimorar minhas habilidades como
					 							 Desenvolvedor Front End, e algumas SoftSkills que vão me tornar um
					 							 Desenvolvedor melhor: Comunicação Efetiva, Liderança... Também tenho
					 							 me concentrado no Inglês, estou fazendo o curso na Wise Up.`,
				secondParagraph: `Estou cursando Ciência da Computação na Anhembi Morumbi, e sou
													formado em Técnico em Desenvolvimento de Sistemas pela Etec de Embu.`,
			},
			ocupation: {
				list: [
					{
						id: 1,
						title: 'Desenvolvedor Front-End',
						fromTo: 'mai. de 2021 – o momento',
						company: 'D1 - Jornadas Digitais',
						description: [
							{
								id: 1,
								text: `Eu trabalho usando a metodologia Scrum no desenvolvimento de novas features,
									resolvendo Bugs e desenvolvendo testes de uma plataforma que tem o objetivo de geração
									de documentos desenho e implementação de jornadas digitais e chatbots`,
							},
							{
								id: 2,
								text: `Durante o dia-a-dia eu utilizo: NextJS + TypeScript + Redux Saga + Context API + Styled Components,
									para testes usamos Cypress(e2e), Jest(unitários), também implementamos jsDocs para comentar o objetivo das funções,
									aplicamos o conventional commits para manter os commits sucintos, eu também cuido de algumas libs,
									De componentes, tokens, ícones... Eu também do Hotjar/Google Analytics junto com o resto do time de
									Front`,
							},
						],
					},
					{
						title: 'Desenvolvedor Front-End',
						fromTo: 'fev. de 2021 – ago. de 2021 - 7 meses',
						company: 'NovaHaus',
						description: [
							{
								id: 1,
								text: `Trabalhei com Angular em um Projeto para Gol, usando design atômico, bem-css, e ao
									contrário do Mobile First nós criávamos o Web para depois adaptar para mobile, também
									realizamos testes em outros browsers para ver se tinham o comportamento correto usando
									Cross Browser, o Kanban foi adotado para controlar o fluxo de trabalho, e o desgin era
									consultado através do Zeplin.`,
							},
							{
								id: 2,
								text: `Participei do desenvolvimento da intranet do poliedro, usando Next com TypeScript,
									Context para compartilhar estados, docker, Material UI... E os layout eram consultados
									no Figma, o design foi construído usando grid, e para refletir isso na tela usamos o
									componente Grid do Material UI.`,
							},
						],
					},
					{
						title: 'Desenvolvedor Full Stack',
						fromTo: 'set de 2020 - jan de 2021 - 5 meses',
						company: 'NWB - Network Brasil',
						description: [
							{
								id: 1,
								text: `Desenvolvi um site de votações para o canal Desimpedidos, e uma interface para
									 apresentar todos esses dados para empresa.`,
							},
							{
								id: 2,
								text: `Participei do desenvolvimento do Xtrala(EJS/ React Native) uma plataforma que aproxima os
									fãs/talentos, onde o usuário pode comprar vídeos do talento desejado, também fiz o
									aplicativo para listar os pedidos do talento, mostrar o extrato, gravar e enviar os
									vídeos para o usuário.`,
							},
							{
								id: 3,
								text: `Desenvolvi atualizações no site da empresa usando Angular, criando novas telas e melhorando as
									antigas, também comecei a inserir um sistema de contabilidade.`,
							},
						],
					},
				],
			},
		},
	},
};
