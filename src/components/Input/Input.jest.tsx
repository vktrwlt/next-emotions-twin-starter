import { Input } from '@components/Input/Input';
import { render, fireEvent } from '@utils/test-utils';

describe('<Input />', () => {
  const { asFragment } = render(<Input />);
  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
