import { LanguageTypes } from '../../types/LanguagesTypes';

type LanguagesAplication = {
	'pt-BR': LanguageTypes[];
	'en-US': LanguageTypes[];
};

/**
 * @export
 * @component
 * @name verifyLanguage
 *
 * @description
 * Responsável por verificar se existe determinado idioma e retornar o default.
 */
export const verifyLanguage = (
	language: 'pt-BR' | 'en-US',
	languages: LanguagesAplication
) => {
	const isExists = languages[language];

	if (isExists) {
		return language;
	}
	return 'pt-BR';
};
