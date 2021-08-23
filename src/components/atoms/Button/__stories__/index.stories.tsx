import { Button } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = ({ ...args }) => (
  <Button {...args}>サンプル</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Fit = Template.bind({});
Fit.args = {
  fit: true,
};
