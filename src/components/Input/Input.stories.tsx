import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Input, InputProps } from '@components/Input/Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    variant: {
      description: 'The type of Input',
    },
    size: {
      description: 'The size of Input',
    },
    children: {
      description: 'The Input content',
      defaultValue: 'Input',
      type: { name: 'text', required: true },
    },
  },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'primary', size: 'md' };
