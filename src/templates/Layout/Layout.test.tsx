import { Layout } from '@/templates/Layout/Layout';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Layout />', () => {
  const { asFragment } = render(<Layout>Hello</Layout>);
  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
