import tw, { styled, css, theme, TwStyle } from 'twin.macro';

export interface InputProps {
  variant?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const primaryVariants = {
  // Named class sets
  primary: tw` `,
  secondary: tw` `,
};

const sizeVariants = {
  // Named class sets
  sm: tw` `,
  md: tw` `,
  lg: tw` `,
};

export const Input = styled.div(
  ({ variant = 'primary', size = 'md' }: InputProps) => [
    // Base Styles
    tw` `,

    // Dynamic Styles
    primaryVariants[variant],
    sizeVariants[size],
  ]
);
