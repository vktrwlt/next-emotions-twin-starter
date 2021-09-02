import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Layout, LayoutProps } from '@/components/Layout/Layout';

export default {
  title: 'Layout',
  component: Layout,
};

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'primary', size: 'md' };
