export type ListLink = {
	id: number;
	name: string;
	link: string;
};

export type Project = {
	id: number;
	title: string;
	img: string;
	description: string;
	listLink: ListLink[];
};
