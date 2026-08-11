import { render } from '@testing-library/react-native';

import Home from '@/app/(tabs)';

jest.mock('@/actions/getServerData', () => ({
  getServerData: jest.fn().mockResolvedValue('Hello from Server Functions!')
}));

describe('Home Test', () => {
  it('should render Home', async () => {
    const homeComponent = render(<Home />);
    await homeComponent.findByText('Expo RSC & SSR Template');
    expect(homeComponent).toBeDefined();
  });
  it('should get text on screen', async () => {
    const { findByText } = render(<Home />);
    const text = await findByText('Expo RSC & SSR Template');
    expect(text).toBeDefined();
  });
});
