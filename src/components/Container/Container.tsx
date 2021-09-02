import tw, { styled, css, theme } from 'twin.macro';

export interface ContainerProps {
  children: React.ReactNode;
}

const Box = styled.div`
  ${tw`max-w-screen-xl px-8 mx-auto `}
`;

const Container = (props: ContainerProps) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

export { Container };
