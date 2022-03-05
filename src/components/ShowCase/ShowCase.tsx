import Header from '../Header';
import ShowCaseContent from '../ShowCaseContent';

import { ContainerStyled } from './styled';
/**
 * @export
 * @component
 * @name ShowCaseContent
 *
 * @description
 * Responsável por renderizar os componentes Header
 * e Show Case Content
 */
export const ShowCase = () => (
	<ContainerStyled>
		<Header />

		<ShowCaseContent />
	</ContainerStyled>
);
