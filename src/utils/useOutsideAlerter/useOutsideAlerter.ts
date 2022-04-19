import { useEffect } from 'react';

type Params = {
	ref: React.RefObject<HTMLUListElement>;
	setDropdown: (value: boolean) => void;
};

const CLASS_MENU_DROPDOWN = 'hamburger-react';

/**
 * @export
 * @hook
 * @name useOutsideAlerter
 *
 * @description
 * Responsável por fazer o controle do click fora do objeto.
 */
export function useOutsideAlerter({ ref, setDropdown }: Params) {
	useEffect(() => {
		function handleClickOutside(event: any) {
			const notIsHamburgerReact =
				event.target.offsetParent.className !== CLASS_MENU_DROPDOWN &&
				event.target.className !== CLASS_MENU_DROPDOWN;

			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				notIsHamburgerReact
			) {
				setDropdown(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}
