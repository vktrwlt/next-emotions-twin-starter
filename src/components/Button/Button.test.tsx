import { Button } from './Button';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Button />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toBeInTheDocument();
  });
});
