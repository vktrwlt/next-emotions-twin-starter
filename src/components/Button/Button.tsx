import { FC } from 'react';
import tw, { styled, css, theme, TwStyle } from 'twin.macro';

export interface ButtonProps {
  /**
   * The visual style of the Button
   * @default "solid"
   */
  variant?: 'solid' | 'ghost' | 'outline' | 'link';
  /**
   * The size of the Button
   * @default "md"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const primaryVariants = {
  // Named class sets
  solid: tw`text-white bg-green-600 hocus:(bg-green-700)`,
  ghost: tw`text-green-700 border-green-700 border-2 hocus:(bg-green-100)`,
  outline: tw`text-green-700 hocus:(bg-green-100)`,
  link: tw`text-green-700 hocus:(underline)`,
};

const sizeVariants = {
  // Named class sets
  xs: tw`px-4 py-1`,
  sm: tw`px-5 py-2`,
  md: tw`px-6 py-3`,
  lg: tw`py-4 text-xl px-7`,
};

export const Button: FC<ButtonProps> = styled.button(({ variant, size }) => [
  // Base Styles
  tw`font-semibold duration-75 transform rounded focus:outline-none`,

  // Dynamic Styles
  primaryVariants[variant],
  sizeVariants[size],
]);

Button.defaultProps = {
  variant: 'solid',
  size: 'md',
};
