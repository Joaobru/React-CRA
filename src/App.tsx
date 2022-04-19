import React, { useEffect } from 'react';

import Home from './components/Home';
import GlobalStyles from './assets/styles/global';
import './i18n';

/**
 * @export
 * @component
 * @name App
 *
 * @description
 * Responsável por renderizar todos os componentes
 */
function App() {
	/**
	 * @function
	 * @name handleScroll
	 *
	 * @description
	 * Responsável por verificar a mudança do scroll
	 */
	const handleScroll = () => {
		const reveals = Array.from(document.querySelectorAll('.reveal'));

		reveals.forEach((item) => {
			const windowHeight = window.innerHeight;
			const revealTop = item.getBoundingClientRect().top;
			const revealPoint = 150;

			if (revealTop < windowHeight - revealPoint) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	return (
		<>
			<GlobalStyles />
			<Home />
		</>
	);
}

export default App;
