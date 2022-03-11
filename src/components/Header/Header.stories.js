import React from 'react';
import { Header } from './index';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    {
      to: '/despre',
      label: 'About project',
    },
    {
      to: '/centre',
      label: 'Centers list',
    },
    {
      to: '/blog',
      label: 'Blog',
    },
    {
      to: '/contact',
      label: 'Contact',
    },
    {
      to: '/doneaza',
      label: 'Support the project',
    },
  ],
};
