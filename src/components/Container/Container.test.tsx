import { Container } from './Container';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Container />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Container>Container</Container>);
    expect(container).toBeInTheDocument();
  });
});
