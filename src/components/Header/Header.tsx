import {
	ContainerStyled,
	ListStyled,
	LanguageOptionStyled,
	LinkSectionStyled,
} from './styled';

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Responsável por montar o Header.
 */
export const Header = () => (
	<header>
		<ContainerStyled>
			<ListStyled>
				<li>
					<LinkSectionStyled href="#about-me">Sobre Mim</LinkSectionStyled>
				</li>

				<li>
					<LinkSectionStyled href="#ocupation">Carreira</LinkSectionStyled>
				</li>

				<li>
					<LinkSectionStyled href="#skills">Habilidades</LinkSectionStyled>
				</li>

				<li>
					<LinkSectionStyled href="#projects">Projetos</LinkSectionStyled>
				</li>

				<li>
					<LanguageOptionStyled name="language">
						<option value="pt-br">Português</option>
					</LanguageOptionStyled>
				</li>
			</ListStyled>
		</ContainerStyled>
	</header>
);
