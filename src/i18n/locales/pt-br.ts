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
						id: 2,
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
						id: 3,
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
			skills: {
				title: 'Habilidades',
				titleLevel: 'Nível',
				list: [
					{
						id: 1,
						icon: reactIcon,
						link: 'https://pt-br.reactjs.org/',
						title: 'ReactJS',
						level: 'Avançado',
					},
					{
						id: 2,
						icon: reactIcon,
						link: 'https://reactnative.dev/',
						title: 'React Native',
						level: 'Intermediário',
					},
					{
						id: 3,
						icon: nextIcon,
						link: 'https://nextjs.org/',
						title: 'NextJS',
						level: 'Avançado',
					},
					{
						id: 4,
						icon: angularIcon,
						link: 'https://angular.io/',
						title: 'Angular',
						level: 'Básico',
					},
					{
						id: 5,
						icon: vueIcon,
						link: 'https://vuejs.org/',
						title: 'VueJS',
						level: 'Básico',
					},
					{
						id: 6,
						icon: nodeIcon,
						link: 'https://nodejs.org/en/',
						title: 'NodeJs',
						level: 'Intermediário',
					},
					{
						id: 7,
						icon: expressIcon,
						link: 'https://expressjs.com/pt-br/',
						title: 'Express',
						level: 'Básico',
					},
					{
						id: 8,
						icon: dockerIcon,
						link: 'https://www.docker.com/',
						title: 'Docker',
						level: 'Básico',
					},
				],
			},
			projects: {
				title: 'Projetos',
				list: [
					{
						id: 1,
						title: 'LeatmeAsk',
						img: leatmeAskImage,
						description: `O LeatMeask serve para pessoas que produzem conteúdo, auxilia no
					controle das perguntas durante lives... Tornando muito mais fácil
					interagir com o seu público.`,
						listLink: [
							{
								id: 1,
								name: 'GitHub',
								link: 'https://github.com/Joaobru/Leatmeask',
							},
							{
								id: 2,
								name: 'Projetos',
								link: 'https://leatmeask-4458b.firebaseapp.com/',
							},
						],
					},
					{
						id: 2,
						title: 'Proffy',
						img: proffyImage,
						description: `O Proffy é uma plataforma que visa facilitar a conexão entre alunos e
						professores, dando a possibilidade dos professores cadastrarem suas
						aulas especificando a matéria, horários, dias...`,
						listLink: [
							{
								id: 1,
								name: 'GitHub',
								link: 'https://github.com/Joaobru/Proffy',
							},
							{
								id: 2,
								name: 'Projetos',
								link: 'https://stupefied-turing-6a35f2.netlify.app/',
							},
						],
					},
					{
						id: 3,
						title: 'Escala',
						img: escalaImage,
						description: `O projeto foi desenvolvido para o Hackaton da CCR 2.0 pelo grupo 25,
						nós desenvolvemos um aplicativo com sistema de Gameficação para
						diminuir o índice de evasão escolar.`,
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
						description: `Esse projeto foi desenvolvido com fins educativos, com ele eu conheci
						a ferramenta MirageJS, e aperfeiçoei minhas habilidades em Context API
						e Styled Components.`,
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
						description: `Este projeto foi desenvolvido com a finalidade de melhorar minhas
						habilidades no Front End/Back End, para manipulação de um usuário,
						sendo possível criar, listar, editar e excluir.`,
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
