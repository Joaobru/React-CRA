import {
	ContainerSkillStyled,
	ContainerContentSkillStyled,
	ImgStyled,
	TechStyled,
	TextStyled,
	LinkStyled,
} from './styled';

type Props = {
	img: string;
	link: string;
	title: string;
	level: string;
};

/**
 * @export
 * @component
 * @name SkillItem
 *
 * @description
 * Responsável por renderizar o item de uma lista de habilidades
 */
export const SkillItem = ({ img, link, title, level }: Props) => (
	<LinkStyled href={link} target="_blank" rel="noreferrer">
		<ContainerSkillStyled>
			<ImgStyled src={img} alt="React" />

			<ContainerContentSkillStyled>
				<TechStyled>{title}</TechStyled>
				<TextStyled>Nível - {level}</TextStyled>
			</ContainerContentSkillStyled>
		</ContainerSkillStyled>
	</LinkStyled>
);
