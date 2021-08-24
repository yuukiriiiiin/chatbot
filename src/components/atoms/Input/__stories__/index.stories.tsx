import { Input } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/Input',
  component: Input,
};

const Template: ComponentStory<typeof Input> = ({ ...args }) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  value: 'さんぷるぅ',
  name: 'name',
  placeholder: 'お名前を入力してください',
  onChange: () => {},
};

export const Required = Template.bind({});
Required.args = {
  type: 'text',
  value: '',
  name: 'name',
  placeholder: 'お名前を入力してください',
  required: true,
  onChange: () => {},
};

export const HasError = Template.bind({});
HasError.args = {
  type: 'text',
  value: '',
  name: 'name',
  placeholder: 'お名前を入力してください',
  hasError: true,
  onChange: () => {},
};
