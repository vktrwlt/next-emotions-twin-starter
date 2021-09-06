import React from 'react';
import { Header } from '@/templates/Layout/Header/Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
