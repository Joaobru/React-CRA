import { useTranslation } from 'react-i18next';

import SkillItem from '../SkillItem';
import { SkillsList } from '../../types/Skills';
import {
	SectionContainerStyled,
	TitleSection,
	ContainerSkillsStyled,
} from './styled';

/**
 * @export
 * @component
 * @name Skills
 *
 * @description
 * Responsável por renderizar a seção "Habilidades"
 */
export const Skills = () => {
	const { t } = useTranslation();

	const skillsList = t<string, SkillsList[]>('home.skills.list');

	return (
		<SectionContainerStyled className="reveal" id="skills">
			<TitleSection>{t('home.skills.title')}</TitleSection>

			<ContainerSkillsStyled>
				{skillsList.map((skill) => (
					<SkillItem
						img={skill.icon}
						link={skill.link}
						title={skill.title}
						level={skill.level}
						key={skill.id}
					/>
				))}
			</ContainerSkillsStyled>
		</SectionContainerStyled>
	);
};
