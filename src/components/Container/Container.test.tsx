import { Container } from '@/components/Container/Container';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Container />', () => {
  const { asFragment } = render(<Container>Container</Container>);
  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
