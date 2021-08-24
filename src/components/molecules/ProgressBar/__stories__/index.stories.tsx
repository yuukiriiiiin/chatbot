import { ProgressBar } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'molecules/ProgressBar',
  component: ProgressBar,
};

const Template: ComponentStory<typeof ProgressBar> = ({ ...args }) => (
  <ProgressBar {...args} />
);

export const Progress0 = Template.bind({});
Progress0.args = {
  progress: 0,
};

export const Progress1 = Template.bind({});
Progress1.args = {
  progress: 1,
};

export const Progress2 = Template.bind({});
Progress2.args = {
  progress: 2,
};

export const Progress3 = Template.bind({});
Progress3.args = {
  progress: 3,
};
