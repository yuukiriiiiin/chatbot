import { Name } from '../Name';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'pages/Name',
  component: Name,
};

const Template: ComponentStory<typeof Name> = ({ ...args }) => (
  <Name {...args} />
);

export const Default = Template.bind({});
Default.args = {
  form: {
    name: 'あ',
    email: '',
    tel: '',
    checked: '',
    message: '',
  },
  edited: {
    name: true,
    email: false,
    tel: false,
    message: false,
  },
  validationErrors: {
    name: { error: false, message: '' },
    email: { error: false, message: '' },
    tel: { error: false, message: '' },
    message: { error: false, message: '' },
  },
};
