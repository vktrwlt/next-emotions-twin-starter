import { Story, Meta } from '@storybook/react';
import { Layout, LayoutProps } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Layout' };
