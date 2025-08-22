import { render } from '@testing-library/react-native';

import Home from '@/app/(tabs)';

describe('Home Test', () => {
  it('should render Home', () => {
    const homeComponent = render(<Home />);
    expect(homeComponent).toBeDefined();
  });
  it('should get text on screen', () => {
    const { getByText } = render(<Home />);
    const text = getByText('React Native Template');
    expect(text).toBeDefined();
  });
});
