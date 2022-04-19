import {
	SectionContainerStyled,
	TitleSection,
	ContainerSkillsStyled,
} from './styled';
import SkillItem from '../SkillItem';
import reactIcon from '../../assets/icons/react.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import nextIcon from '../../assets/icons/nextjs.svg';
import angularIcon from '../../assets/icons/angular.svg';
import vueIcon from '../../assets/icons/vue.svg';
import dockerIcon from '../../assets/icons/docker.svg';
import expressIcon from '../../assets/icons/express.svg';

/**
 * @export
 * @component
 * @name Skills
 *
 * @description
 * Responsável por renderizar a seção "Habilidades"
 */
export const Skills = () => (
	<SectionContainerStyled className="reveal" id="skills">
		<TitleSection>Habilidades</TitleSection>

		<ContainerSkillsStyled>
			<SkillItem
				img={reactIcon}
				link="https://pt-br.reactjs.org/"
				title="React"
				level="Avançado"
			/>

			<SkillItem
				img={reactIcon}
				link="https://reactnative.dev/"
				title="React Native"
				level="Intermediário"
			/>

			<SkillItem
				img={nextIcon}
				link="https://nextjs.org/"
				title="NextJS"
				level="Avançado"
			/>

			<SkillItem
				img={angularIcon}
				link="https://angular.io/"
				title="Angular"
				level="Básico"
			/>

			<SkillItem
				img={vueIcon}
				link="https://vuejs.org/"
				title="VueJS"
				level="Básico"
			/>

			<SkillItem
				img={nodeIcon}
				link="https://nodejs.org/en/"
				title="NodeJs"
				level="Intermediário"
			/>

			<SkillItem
				img={expressIcon}
				link="https://expressjs.com/pt-br/"
				title="Express"
				level="Básico"
			/>

			<SkillItem
				img={dockerIcon}
				link="https://www.docker.com/"
				title="Docker"
				level="Básico"
			/>
		</ContainerSkillsStyled>
	</SectionContainerStyled>
);
