import { RadioButton } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/RadioButton',
  component: RadioButton,
};

const Template: ComponentStory<typeof RadioButton> = ({ ...args }) => (
  <RadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'name',
  name: 'name',
  label: '選択肢選択肢選択肢選択肢',
  checked: false,
  onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  value: 'name',
  name: 'name',
  label: '選択肢選択肢選択肢選択肢',
  checked: true,
  onChange: () => {},
};
