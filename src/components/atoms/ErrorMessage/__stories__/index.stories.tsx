import { ErrorMessage } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/ErrorMessage',
  component: ErrorMessage,
};

const Template: ComponentStory<typeof ErrorMessage> = ({ ...args }) => (
  <ErrorMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'この項目は必須です。',
};
