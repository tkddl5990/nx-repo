import { render } from '@testing-library/react';

import Home from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Home>
        <div>this is home</div>
      </Home>
    );
    expect(baseElement).toBeTruthy();
  });
});
