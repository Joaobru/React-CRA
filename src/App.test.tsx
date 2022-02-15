import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  it('should be able to render the Boiler plate text', () => {
    const { getByText } = render(<App />);

    const container = getByText('Boiler Plate');
    expect(container).toBeTruthy();
  });
});
