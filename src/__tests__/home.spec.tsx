import { render } from '@testing-library/react-native';

import Home from 'src/app/(tabs)';

describe('Home Test', () => {
  it('should render App', () => {
    const { getByText } = render(<Home />);
    const text = getByText('React Native Template');
    expect(text).toBeDefined();
  });
});
