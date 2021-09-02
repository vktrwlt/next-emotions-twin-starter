import { Container } from '@/components/Container';
import tw, { styled, css, theme } from 'twin.macro';

const Box = styled.div`
  ${tw``}
`;

const Header = () => {
  return (
    <Box>
      <Container>Header</Container>
    </Box>
  );
};

export { Header };
