import styled from 'styled-components';

export const ContainerJobStyled = styled.div`
	position: relative;
	border-left: 3px solid var(--text-light);
`;

export const JobStyled = styled.div`
	max-width: 500px;
	color: var(--text-light);
	margin-left: 16px;
	padding-bottom: 24px;

	&:before {
		content: '';
		display: block;
		width: 12px;
		height: 12px;
		border-radius: 40px;
		background-color: var(--text-light);
		position: absolute;
		left: -7px;
	}
`;

export const JobTitleStyled = styled.h3`
	font-size: 20px;
`;

export const JobCompanyStyled = styled.h4`
	margin-top: 5px;
`;

export const JobFromToStyled = styled.p`
	margin-top: 10px;
	line-height: 22px;
`;

export const DetailsButtonStyled = styled.button`
	color: #ff3c78;
	background: transparent;
	margin-top: 18px;
	font-size: 16px;
	border: 0;

	&:hover {
		filter: brightness(90%);
	}
`;

type DetailsProps = {
	open: boolean;
};

export const DetailsStyled = styled.div<DetailsProps>`
	opacity: ${({ open }) => (open ? 1 : 0)};
	max-height: ${({ open }) => (open ? '100vh' : 0)};
	overflow: ${({ open }) => (open ? 'auto' : 'hidden')};
	transition: all 0.5s ease-out;
	overflow-y: hidden;
`;

export const DescriptionStyled = styled.p`
	margin-top: 10px;
	line-height: 22px;
`;
