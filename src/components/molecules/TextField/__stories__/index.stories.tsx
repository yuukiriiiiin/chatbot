import { TextField } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'molecules/TextField',
  component: TextField,
};

const Template: ComponentStory<typeof TextField> = ({ ...args }) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  value: '',
  name: 'name',
  label: 'お名前',
  placeholder: 'お名前を入力してください。',
  required: true,
  hasError: false,
};

export const HasError = Template.bind({});
HasError.args = {
  type: 'text',
  value: '',
  name: 'name',
  label: 'お名前',
  placeholder: 'お名前を入力してください。',
  required: true,
  hasError: true,
  errorMessage: 'この項目は必須です。',
};
