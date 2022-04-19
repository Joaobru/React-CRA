type DescriptionOcupation = {
	id: number;
	text: string;
};

export type OcupationList = {
	id: number;
	title: string;
	fromTo: string;
	company: string;
	description: DescriptionOcupation[];
};
