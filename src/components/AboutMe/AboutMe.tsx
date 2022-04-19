import { useTranslation } from 'react-i18next';

import developerGif from '../../assets/gifs/developer.gif';
import {
	SectionContainerStyled,
	ContentContainerStyled,
	SubtitleStyled,
	TextStyled,
} from './styled';

/**
 * @export
 * @component
 * @name AboutMe
 *
 * @description
 * Responsável por renderizar a seção "Sobre mim"
 */
export const AboutMe = () => {
	const { t } = useTranslation();

	return (
		<SectionContainerStyled className="reveal" id="about-me">
			<img src={developerGif} alt="Developer Animation" />

			<ContentContainerStyled>
				<SubtitleStyled>{t('home.header.aboutMeTitle')}</SubtitleStyled>

				<TextStyled>{t('home.aboutMe.firstParagraph')}</TextStyled>

				<TextStyled>{t('home.aboutMe.secondParagraph')}</TextStyled>
			</ContentContainerStyled>
		</SectionContainerStyled>
	);
};
