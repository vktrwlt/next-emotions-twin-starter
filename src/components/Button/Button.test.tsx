import { Button } from '@components/Button';
import { render, fireEvent } from '@utils/test-utils';

describe('<Button />', () => {
  const { asFragment } = render(<Button>Button</Button>);
  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
