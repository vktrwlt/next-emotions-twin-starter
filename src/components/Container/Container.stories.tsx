import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Container, ContainerProps } from '@/components/Container/Container';

export default {
  title: 'Container',
  component: Container,
};

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'primary', size: 'md' };
