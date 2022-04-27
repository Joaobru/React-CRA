import {
	ContainerProject,
	ImgStyled,
	TitleStyled,
	ContainerLinksStyled,
	LinkStyled,
} from './styled';

type ListLink = {
	id: number;
	name: string;
	link: string;
};

type Props = {
	title: string;
	img: string;
	description: string;
	listLink: ListLink[];
};

/**
 * @export
 * @component
 * @name Project
 *
 * @description
 * Responsável por renderizar um Projeto
 */
export const Project = ({ title, description, listLink, img }: Props) => (
	<ContainerProject>
		<ImgStyled src={img} alt={title} />
		<TitleStyled>{title}</TitleStyled>

		<p>{description}</p>

		<ContainerLinksStyled>
			{listLink.map((linkItem: ListLink) => (
				<LinkStyled href={linkItem.link} target="__blank" key={linkItem.id}>
					{linkItem.name}
				</LinkStyled>
			))}
		</ContainerLinksStyled>
	</ContainerProject>
);
