import { Container } from '@/components/Container';
import tw, { styled, css, theme } from 'twin.macro';

const StyledHeader = styled.header`
  ${tw``}
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Container>Header</Container>
    </StyledHeader>
  );
};
