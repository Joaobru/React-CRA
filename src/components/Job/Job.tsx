import { useState } from 'react';

import { OcupationList } from '../../types/OcupationList';
import {
	ContainerJobStyled,
	JobStyled,
	JobTitleStyled,
	JobCompanyStyled,
	JobFromToStyled,
	DetailsButtonStyled,
	DetailsStyled,
	DescriptionStyled,
} from './styled';

/**
 * @export
 * @component
 * @name Ocupation
 *
 * @description
 * Responsável por renderizar a seção de Ocupation
 */
export const Job = ({ title, company, fromTo, description }: OcupationList) => {
	const [open, setOpen] = useState(false);

	const onToggleDetails = () => {
		setOpen(!open);
	};

	return (
		<ContainerJobStyled>
			<JobStyled>
				<JobTitleStyled>{title}</JobTitleStyled>

				<JobCompanyStyled>{company}</JobCompanyStyled>

				<JobFromToStyled>{fromTo}</JobFromToStyled>

				<DetailsButtonStyled type="button" onClick={onToggleDetails}>
					{open ? 'Ver Menos' : 'Ver Mais'}
				</DetailsButtonStyled>

				<DetailsStyled open={open}>
					{description.map((item) => (
						<DescriptionStyled key={item.id}>{item.text}</DescriptionStyled>
					))}
				</DetailsStyled>
			</JobStyled>
		</ContainerJobStyled>
	);
};
