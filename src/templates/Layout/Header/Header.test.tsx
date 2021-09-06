import { Header } from '@/templates/Layout/Header/Header';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Header />', () => {
  const { asFragment } = render(<Header />);
  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
