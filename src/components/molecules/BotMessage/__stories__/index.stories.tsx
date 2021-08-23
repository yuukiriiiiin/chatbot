import { BotMessage } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'molecules/BotMessage',
  component: BotMessage,
};

const Template: ComponentStory<typeof BotMessage> = ({ ...args }) => (
  <BotMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'お名前を入力してください。',
};

export const LongText = Template.bind({});
LongText.args = {
  text: 'お名前を入力してください。お名前を入力してください。お名前を入力してください。お名前を入力してください。お名前を入力してください。お名前を入力してください。お名前を入力してください。お名前を入力してください。お名前を入力してください。お名前を入力してください。',
};
