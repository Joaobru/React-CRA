import { useTranslation } from 'react-i18next';

import {
	ShowCaseStyled,
	ContainerStyled,
	TitleStyled,
	SubTitleStyled,
	ContainerImageStyled,
} from './styled';

import myPhotoImg from '../../assets/images/joao-photo.png';
import ContactList from '../ContactList';

/**
 * @export
 * @component
 * @name ShowCaseContent
 *
 * @description
 * Responsável por renderizar o titulo, subtitulo, lista de contatos
 * e a minha foto.
 */
export const ShowCaseContent = () => {
	const { t } = useTranslation();

	return (
		<ShowCaseStyled>
			<ContainerStyled>
				<div>
					<div>
						<TitleStyled>João Paulo Brune Dos Santos</TitleStyled>

						<SubTitleStyled>
							{t('home.showCaseContent.ocupation')}
						</SubTitleStyled>
					</div>

					<ContactList />
				</div>

				<ContainerImageStyled>
					<img src={myPhotoImg} alt="João Paulo" />
				</ContainerImageStyled>
			</ContainerStyled>
		</ShowCaseStyled>
	);
};
