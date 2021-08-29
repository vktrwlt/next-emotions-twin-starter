import { InputTwo } from '@components/InputTwo/InputTwo';
import { render, fireEvent } from '@utils/test-utils';

describe('<InputTwo />', () => {
  const { asFragment } = render(<InputTwo />);
  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
