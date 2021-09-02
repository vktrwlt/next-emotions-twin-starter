import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '@/components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'The type of Button',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['solid', 'ghost', 'outline', 'link'],
      },
    },
    size: {
      description: 'The size of Button',
      default: 'md',
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    children: {
      description: 'The Button content',
      defaultValue: 'Button',
      type: { name: 'text', required: true },
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'solid', size: 'md' };
