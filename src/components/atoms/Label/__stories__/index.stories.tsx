import { Label } from '..';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'atoms/Label',
  component: Label,
};

const Template: ComponentStory<typeof Label> = ({ ...args }) => (
  <Label {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  label: 'お名前',
};
