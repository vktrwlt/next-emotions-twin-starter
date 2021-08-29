import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { InputTwo, InputTwoProps } from '@components/InputTwo/InputTwo';

export default {
  title: 'InputTwo',
  component: InputTwo,
  argTypes: {
    variant: {
      description: 'The type of InputTwo',
    },
    size: {
      description: 'The size of InputTwo',
    },
    children: {
      description: 'The InputTwo content',
      defaultValue: 'InputTwo',
      type: { name: 'text', required: true },
    },
  },
};

const Template: Story<InputTwoProps> = (args) => <InputTwo {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'primary', size: 'md' };
