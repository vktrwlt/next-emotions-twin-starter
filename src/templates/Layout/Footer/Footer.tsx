import tw, { styled, css, theme } from 'twin.macro';
import { Container } from '@/components/Container';

const StyledFooter = styled.footer`
  ${tw``}
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>Footer</Container>
    </StyledFooter>
  );
};
