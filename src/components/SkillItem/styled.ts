import styled from 'styled-components';

export const ContainerSkillStyled = styled.div`
	display: flex;
	flex-direction: column;
	background: var(--background-show-case);
	border-radius: 10px;
	padding: 32px 16px;
	transition: all 0.4s ease;

	&:hover {
		transform: scale(1.1);
	}
`;

export const ImgStyled = styled.img`
	max-height: 80px;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
`;

export const ContainerContentSkillStyled = styled.div`
	text-align: center;

	&::before {
		content: '';
		display: block;
		height: 1px;
		width: 100%;
		background: var(--text-light);
		margin-bottom: 20px;
	}
`;

export const TechStyled = styled.h3`
	font-size: 20px;
	color: var(--text-light);
`;

export const TextStyled = styled.p`
	font-size: 16px;
	color: var(--text-light);
	margin-top: 16px;
`;

export const LinkStyled = styled.a`
	text-decoration: none;
`;
