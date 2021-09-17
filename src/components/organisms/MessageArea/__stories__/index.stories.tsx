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
    messageType: 'bot' as const,
    text: 'お名前を教えてください。',
  },
  {
    messageType: 'reply' as const,
    reply: [
      {
        type: 'text',
        value: '桃子',
        name: 'name',
        label: 'お名前',
      },
    ],
    onClick: () => {},
  },
  {
    messageType: 'bot' as const,
    text: 'メールアドレスを教えてください。',
  },
  {
    messageType: 'reply' as const,
    reply: [
      {
        type: 'email',
        value: 'y@gmail.com',
        name: 'email',
        label: 'メールアドレス',
      },
      {
        type: 'email',
        value: 'y@gmail.com',
        name: 'email',
        label: 'メールアドレス',
      },
    ],
    onClick: () => {},
  },
];

export const Default = Template.bind({});
Default.args = {
  messages,
};
