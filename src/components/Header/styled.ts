/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const HeaderStyled = styled.header`
	position: fixed;
	width: 100vw;
	background: var(--background-show-case);
	z-index: 100;
`;

export const ContainerStyled = styled.nav`
	padding-right: 100px;
	padding-left: 100px;

	@media (max-width: 768px) {
		padding-right: 20px;
		padding-left: 20px;
		height: 48px;
	}
`;

type PropsListStyle = {
	activeMobile: boolean;
};

export const ListStyled = styled.ul<PropsListStyle>`
	display: flex;
	justify-content: end;
	gap: 16px;
	padding-top: 24px;
	padding-bottom: 24px;

	li {
		list-style-type: none;
	}

	@media (max-width: 768px) {
		position: absolute;
		top: 5vh;
		right: 0;
		width: 50vw;
		background: var(--background-show-case);
		flex-direction: column;
		align-items: center;
		display: ${({ activeMobile }) => (activeMobile ? 'flex' : 'none')};
		transform: ${({ activeMobile }) =>
		activeMobile ? 'translateX(0)' : 'translateX(100%)'};
	}
`;

type LanguageOptionStyledProps = {
	width: number;
};

export const LanguageOptionStyled = styled.select<LanguageOptionStyledProps>`
	font-size: 18px;
	background: transparent;
	color: var(--text-nav);
	border: 0;
	cursor: pointer;
	transition: color 0.2s;
	width: ${({ width }) => width}px;

	&:hover {
		color: var(--text-light);
	}
`;

export const ItemLanguageOptionStyled = styled.option`
	color: var(--text-dark);
`;

export const LinkSectionStyled = styled.a`
	font-size: 18px;
	position: relative;
	letter-spacing: 0.5px;
	color: var(--text-nav);
	text-decoration: none;
	padding: 0 5px;
	transition: color 0.2s;

	&:hover {
		color: var(--text-light);
	}

	&:after {
		content: '';
		position: absolute;
		background-color: var(--secondary-color);
		height: 3px;
		width: 0;
		left: 0;
		bottom: -10px;
		transition: 0.2s;
	}

	&:hover:after {
		width: 100%;
	}
`;

export const MobileMenuStyled = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		position: absolute;
		right: 20px;
	}
`;
