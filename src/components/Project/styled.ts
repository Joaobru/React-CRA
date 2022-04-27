import styled from 'styled-components';

export const ContainerProject = styled.div`
	background: var(--text-light);
	padding: 24px 18px;
	border-radius: 12px;
`;

export const ImgStyled = styled.img`
	border-radius: 12px;
	height: 180px;
	width: 100%;
`;

export const TitleStyled = styled.h3`
	margin-top: 16px;
	margin-bottom: 8px;
`;

export const ContainerLinksStyled = styled.div`
	display: flex;
	margin-top: 8px;
	gap: 8px;
`;

export const LinkStyled = styled.a`
	color: var(--text-dark);
	border-radius: 8px;
	background-color: #c4c4c4;
	text-decoration: none;
	padding: 6px 20px;
	transition: filter 0.2s;

	&:hover {
		filter: brightness(90%);
	}
`;
