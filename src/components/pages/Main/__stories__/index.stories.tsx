import { Main } from '../Main';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextFieldRow } from '../../../molecules/TextFieldRow';

export default {
  title: 'pages/Main',
  component: Main,
};

const Template: ComponentStory<typeof Main> = ({ ...args }) => (
  <Main {...args} />
);

export const Name = Template.bind({});
Name.args = {
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
  progress: 0,
  current: 'name',
};

export const Email = Template.bind({});
Email.args = {
  form: {
    name: 'あ',
    email: 'i.@f.d',
    tel: '',
    checked: '',
    message: '',
  },
  edited: {
    name: true,
    email: true,
    tel: false,
    message: false,
  },
  validationErrors: {
    name: { error: false, message: '' },
    email: { error: false, message: '' },
    tel: { error: false, message: '' },
    message: { error: false, message: '' },
  },
  progress: 1,
  current: 'email',
};

export const Confirm = Template.bind({});
Confirm.args = {
  form: {
    name: 'あ',
    email: 'i.@f.d',
    tel: '',
    checked: '',
    message: '',
  },
  edited: {
    name: true,
    email: true,
    tel: true,
    message: true,
  },
  validationErrors: {
    name: { error: false, message: '' },
    email: { error: false, message: '' },
    tel: { error: false, message: '' },
    message: { error: false, message: '' },
  },
  progress: 3,
  current: 'confirm',
};
