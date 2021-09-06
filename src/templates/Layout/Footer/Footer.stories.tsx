import React from 'react';
import { Footer } from '@/templates/Layout/Footer/Footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
