import { ReplyMessage } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'molecules/ReplyMessage',
  component: ReplyMessage,
};

const Template: ComponentStory<typeof ReplyMessage> = ({ ...args }) => (
  <ReplyMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  value: '桃子',
  name: 'name',
  label: 'お名前',
};
