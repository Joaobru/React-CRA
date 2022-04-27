import styled from 'styled-components';

export const SectionContainerStyled = styled.section`
	background: var(--background-show-case);
	padding: 100px 100px;

	@media (max-width: 768px) {
		padding-right: 20px;
		padding-left: 20px;
	}
`;

export const TitleSection = styled.h2`
	font-size: 28px;
	color: var(--text-light);
	text-align: center;
`;

export const ContainerProjectsStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(280px, 400px));
	gap: 40px;
	margin-top: 42px;
	justify-content: center;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, minmax(280px, 320px));
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(280px, 380px));
	}
`;
