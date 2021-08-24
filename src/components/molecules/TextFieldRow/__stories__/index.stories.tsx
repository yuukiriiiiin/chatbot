import { TextFieldRow } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'molecules/TextFieldRow',
  component: TextFieldRow,
};

const Template: ComponentStory<typeof TextFieldRow> = ({ ...args }) => (
  <TextFieldRow {...args} />
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
  progress: 1,
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
  progress: 1,
};
