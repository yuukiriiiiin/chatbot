import { Main } from '../Main';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextFieldRow } from '../../../molecules/TextFieldRow';

export default {
  title: 'organisms/Main',
  component: Main,
};

const Template: ComponentStory<typeof Main> = ({ ...args }) => (
  <Main {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 1,
  type: 'name',
  name: 'name',
  value: '',
  placeholder: 'お名前を入力してください',
  onChange: (e: any) => {},
  required: true,
  label: 'お名前',
  hasError: false,
  edited: false,
};
