import styled from 'styled-components';

export const ContainerSectionStyled = styled.section`
	background: var(--background-show-case);
	padding: 100px 100px;

	@media (max-width: 768px) {
		padding-right: 20px;
		padding-left: 20px;
	}
`;

export const TitleStyled = styled.h2`
	font-size: 24px;
	color: var(--text-light);
`;

export const ContainerStepsStyled = styled.div`
	margin-top: 42px;
`;
