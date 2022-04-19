import styled from 'styled-components';

export const ListStyled = styled.ul`
	display: grid;
	gap: 30px;
	grid-template-columns: repeat(4, 50px);
	margin-top: 18px;

	@media (max-width: 768px) {
		margin-top: 30px;
		justify-content: space-between;
		gap: 0;
	}
`;

export const ItemStyled = styled.li`
	list-style-type: none;
	position: relative;
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

type LegendIconStyledType = {
	left?: string;
};

export const LegendIconStyled = styled.p<LegendIconStyledType>`
	font-size: 14px;
	font-weight: 400;
	color: var(--text-light);
	margin-top: 50px;
	position: absolute;
	left: ${(props) => props.left ?? 0};
`;
