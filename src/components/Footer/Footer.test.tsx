import { Footer } from '@/components/Footer/Footer';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Footer />', () => {
  const { asFragment } = render(<Footer />);
  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
