import React from 'react';

import Home from './components/Home';
import GlobalStyles from './assets/styles/global';

/**
 * @export
 * @component
 * @name App
 *
 * @description
 * Responsável por renderizar todos os componentes
 */
function App() {
	return (
		<>
			<GlobalStyles />
			<Home />
		</>
	);
}

export default App;
