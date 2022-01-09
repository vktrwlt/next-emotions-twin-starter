import { Story, Meta } from '@storybook/react';
import { Container, ContainerProps } from './Container';

export default {
  title: 'Container',
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Container' };
