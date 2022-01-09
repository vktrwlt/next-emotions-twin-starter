import { Layout } from './Layout';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Layout />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Layout>Layout</Layout>);
    expect(container).toBeInTheDocument();
  });
});
