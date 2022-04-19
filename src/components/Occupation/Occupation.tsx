import { useTranslation } from 'react-i18next';
import { OcupationList } from '../../types/OcupationList';

import Job from '../Job';

import {
	ContainerSectionStyled,
	TitleStyled,
	ContainerStepsStyled,
} from './styled';

/**
 * @export
 * @component
 * @name Ocupation
 *
 * @description
 * Responsável por renderizar a seção de Ocupation
 */
export const Occupation = () => {
	const { t } = useTranslation();
	const ocupationList = t<string, OcupationList[]>('home.ocupation.list');

	return (
		<ContainerSectionStyled className="reveal" id="career">
			<TitleStyled>{t('home.header.careerTitle')}</TitleStyled>

			<ContainerStepsStyled>
				{ocupationList.map((ocupation) => (
					<Job
						id={ocupation.id}
						key={ocupation.id}
						company={ocupation.company}
						description={ocupation.description}
						fromTo={ocupation.fromTo}
						title={ocupation.title}
					/>
				))}
			</ContainerStepsStyled>
		</ContainerSectionStyled>
	);
};
