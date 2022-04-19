import styled from 'styled-components';

export const SectionContainerStyled = styled.section`
	display: flex;
	justify-content: space-around;
	padding: 100px 100px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding-right: 20px;
		padding-left: 20px;

		img {
			max-width: 200px;
			margin: auto;
		}
	}
`;

export const ContentContainerStyled = styled.div`
	max-width: 580px;
`;

export const SubtitleStyled = styled.h2`
	font-size: 28px;
	color: var();

	@media (max-width: 768px) {
		font-size: 24px;
		text-align: center;
	}
`;

export const TextStyled = styled.p`
	margin-top: 16px;
	font-size: 20px;
	color: var(--text-dark);

	@media (max-width: 768px) {
		font-size: 18px;
		text-align: center;
	}
`;
