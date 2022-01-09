import { Footer } from './Footer';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Footer />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Footer>Footer</Footer>);
    expect(container).toBeInTheDocument();
  });
});
