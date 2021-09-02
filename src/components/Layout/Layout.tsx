import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import tw, { styled, css, theme } from 'twin.macro';

export interface LayoutProps {
  children: React.ReactNode;
}

const Box = styled.div`
  ${tw`flex flex-col min-h-screen overflow-x-hidden bg-white`}
`;
const ContentWrapper = styled.div`
  ${tw`flex-auto w-full mt-md`}
`;

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Box>
      <Header />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer />
    </Box>
  );
};

export { Layout };
