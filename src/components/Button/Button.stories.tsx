import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '@/components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'solid', size: 'md', children: 'Button' };
