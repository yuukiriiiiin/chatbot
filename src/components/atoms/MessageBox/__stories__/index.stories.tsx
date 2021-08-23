import { MessageBox } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/MessageBox',
  component: MessageBox,
};

const Template: ComponentStory<typeof MessageBox> = ({ ...args }) => (
  <MessageBox {...args}>サンプル</MessageBox>
);

export const Bot = Template.bind({});
Bot.args = {
  messageType: 'bot',
  children: <p>Hello</p>,
};

export const Reply = Template.bind({});
Reply.args = {
  messageType: 'reply',
  children: <p>Hello</p>,
};
