import { Header } from '@/templates/Layout/Header';
import { Footer } from '@/templates/Layout/Footer';
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

export const Layout = (props: LayoutProps) => {
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
