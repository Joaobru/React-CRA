import styled from 'styled-components';

export const ListStyled = styled.ul`
	display: flex;
	gap: 20px;
	margin-top: 8px;

	@media (max-width: 768px) {
		margin-top: 60px;
		justify-content: space-between;
		gap: 0;
	}
`;

export const ItemStyled = styled.li`
	list-style-type: none;
`;

export const ContainerIconStyled = styled.a`
	display: flex;
	flex-direction: column;
	text-decoration: none;
`;

export const IconStyled = styled.img`
	max-height: 46px;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.2);
	}
`;

export const LegendIconStyled = styled.p`
	font-size: 14px;
	font-weight: 400;
	color: var(--text-light);
	margin-top: 5px;
`;
