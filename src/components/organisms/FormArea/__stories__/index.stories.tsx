import { FormArea } from '../FormArea';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Children } from 'react';
import { TextFieldRow } from '../../../molecules/TextFieldRow';

export default {
  title: 'organisms/FormArea',
  component: FormArea,
};

const Template: ComponentStory<typeof FormArea> = ({ ...args }) => (
  <FormArea {...args} />
);

const props = {
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

export const Default = Template.bind({});
Default.args = {
  progress: 0,
  children: <TextFieldRow {...props} />,
};
