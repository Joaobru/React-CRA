import { useState, ChangeEvent, useRef } from 'react';
import Hamburger from 'hamburger-react';
import { useTranslation } from 'react-i18next';

import configuration from './configuration';
import {
	ContainerStyled,
	ListStyled,
	LanguageOptionStyled,
	LinkSectionStyled,
	MobileMenuStyled,
	ItemLanguageOptionStyled,
	HeaderStyled,
} from './styled';
import { verifyLanguage } from '../../utils/verifyLanguage/verifyLanguage';
import { LanguageTypes } from '../../types/LanguagesTypes';
import { useOutsideAlerter } from '../../utils/useOutsideAlerter/useOutsideAlerter';

type LanguagesType = 'pt-BR' | 'en-US';

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Responsável por montar o Header.
 */
export const Header = () => {
	const { t, i18n } = useTranslation();
	const selectedLanguage = i18n.language;
	const { languages } = configuration;

	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const dropdownRef = useRef<HTMLUListElement>(null);

	useOutsideAlerter({ ref: dropdownRef, setDropdown: setIsOpenMenu });

	/**
	 * @component
	 * @name handleChangeLanguage
	 *
	 * @description
	 * Responsável por mudar o idioma.
	 */
	const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
		const language = event.target.value;
		i18n.changeLanguage(language);

		setIsOpenMenu(!isOpenMenu);
	};

	return (
		<HeaderStyled>
			<ContainerStyled>
				<MobileMenuStyled>
					<Hamburger
						toggled={isOpenMenu}
						toggle={setIsOpenMenu}
						size={28}
						color="#CFCBD4"
					/>
				</MobileMenuStyled>
				<ListStyled activeMobile={isOpenMenu} ref={dropdownRef}>
					<li>
						<LinkSectionStyled href="#about-me">
							{t('home.header.aboutMeTitle')}
						</LinkSectionStyled>
					</li>

					<li>
						<LinkSectionStyled href="#career">
							{t('home.header.careerTitle')}
						</LinkSectionStyled>
					</li>

					<li>
						<LinkSectionStyled href="#skills">
							{t('home.header.skillsTitle')}
						</LinkSectionStyled>
					</li>

					<li>
						<LinkSectionStyled href="#projects">
							{t('home.header.projectsTitle')}
						</LinkSectionStyled>
					</li>

					<li>
						<LanguageOptionStyled
							value={verifyLanguage(
								selectedLanguage as LanguagesType,
								languages
							)}
							name="language"
							onChange={handleChangeLanguage}
							width={
								languages[
									verifyLanguage(selectedLanguage as LanguagesType, languages)
								][0].width
							}
						>
							{languages[
								verifyLanguage(selectedLanguage as LanguagesType, languages)
							]?.map((language: LanguageTypes) => (
								<ItemLanguageOptionStyled
									key={language.value}
									value={language.value}
								>
									{language.name}
								</ItemLanguageOptionStyled>
							))}
						</LanguageOptionStyled>
					</li>
				</ListStyled>
			</ContainerStyled>
		</HeaderStyled>
	);
};
