import { useTranslation } from 'react-i18next';

import {
	SectionContainerStyled,
	TitleSection,
	ContainerProjectsStyled,
} from './styled';
import Project from '../Project';
import { Project as ProjectType } from '../../types/Project';

/**
 * @export
 * @component
 * @name Projects
 *
 * @description
 * Responsável por renderizar a seção "Projetos"
 */
export const Projects = () => {
	const { t } = useTranslation();
	const projectList = t<string, ProjectType[]>('home.projects.list');

	return (
		<SectionContainerStyled className="reveal" id="projects">
			<TitleSection>{t('home.projects.title')}</TitleSection>

			<ContainerProjectsStyled>
				{projectList.map((project) => (
					<Project
						img={project.img}
						title={project.title}
						description={project.description}
						listLink={project.listLink}
						key={project.id}
					/>
				))}
			</ContainerProjectsStyled>
		</SectionContainerStyled>
	);
};
