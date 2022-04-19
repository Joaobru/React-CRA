import styled from 'styled-components';

export const SectionContainerStyled = styled.section`
	padding: 100px 100px;

	@media (max-width: 768px) {
		padding-right: 20px;
		padding-left: 20px;
	}
`;

export const TitleSection = styled.h2`
	font-size: 28px;
	color: var(--text-dark);
	text-align: center;
`;

export const ContainerSkillsStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(200px, 250px));
	justify-content: center;
	margin-top: 42px;
	gap: 40px;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, minmax(200px, 250px));
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(200px, 250px));
	}
`;
