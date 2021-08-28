import { MessageArea } from '../MessageArea';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'organisms/MessageArea',
  component: MessageArea,
};

const Template: ComponentStory<typeof MessageArea> = ({ ...args }) => (
  <MessageArea {...args} />
);

const messages = [
  {
    messageType: 'bot',
    text: 'お名前を教えてください。',
  },
  {
    messageType: 'reply',
    type: 'text',
    value: '桃子',
    name: 'name',
    label: 'お名前',
    onclick: () => {},
  },
  {
    messageType: 'bot',
    text: 'メールアドレスを教えてください。',
  },
  {
    messageType: 'reply',
    type: 'email',
    value: 'y@gmail.com',
    name: 'email',
    label: 'メールアドレス',
    onclick: () => {},
  },
];

export const Default = Template.bind({});
Default.args = {
  messages,
};
