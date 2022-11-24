import Navbar from './';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Navbar', () => {
  it('should render without crashing', () => {
    render(
      <HashRouter>
        <Navbar />
      </HashRouter>
    );
  });
});
