import react from 'react';
import { BotMessage } from '../../molecules/BotMessage';
import { ReplyMessage } from '../../molecules/ReplyMessage';

type BotMessage = {
  messageType: 'bot';
  text: string;
};

type ReplyMessage = {
  messageType: 'reply';
  type: string;
  value: string;
  name: string;
  label: string;
  onClick: () => void;
};

export type Message = BotMessage | ReplyMessage;

type Props = {
  messages: Message[];
};

export const MessageArea: React.VFC<Props> = ({ messages }) => {
  return (
    <div>
      {messages.map(message =>
        message.messageType === 'bot' ? (
          <div>
            <BotMessage text={message.text} />
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ReplyMessage
              type={message.type}
              value={message.value}
              name={message.name}
              label={message.label}
              onClick={message.onClick}
            />
          </div>
        )
      )}
    </div>
  );
};
