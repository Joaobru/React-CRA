import styled from 'styled-components';

export const ContainerStyled = styled.nav`
	padding-right: 100px;
	padding-left: 100px;
`;

export const ListStyled = styled.ul`
	display: flex;
	justify-content: end;
	gap: 16px;
	padding-top: 24px;
	padding-bottom: 24px;

	li {
		list-style-type: none;
	}
`;

export const LanguageOptionStyled = styled.select`
	font-size: 18px;
	background: transparent;
	color: var(--text-nav);
	border: 0;
	cursor: pointer;
	transition: color 0.2s;

	&:hover {
		color: var(--text-light);
	}
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
