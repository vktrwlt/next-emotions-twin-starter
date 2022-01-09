import { FC } from 'react';
import { Header } from '@/templates/Layout/Header';
import { Footer } from '@/templates/Layout/Footer';
import tw, { styled, css, theme } from 'twin.macro';

export interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  ${tw`flex flex-col min-h-screen overflow-x-hidden bg-white`}
`;
const ContentWrapper = styled.div`
  ${tw`flex-auto w-full mt-md`}
`;

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer />
    </StyledLayout>
  );
};
