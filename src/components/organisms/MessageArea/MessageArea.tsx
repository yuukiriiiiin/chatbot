import react from 'react';
import { BotMessage } from '../../molecules/BotMessage';
import { ReplyMessage } from '../../molecules/ReplyMessage';
import styles from './index.module.scss';

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
    <div className={styles.root}>
      {messages.map(message =>
        message.messageType === 'bot' ? (
          <div style={{ marginTop: '10px' }}>
            <BotMessage text={message.text} />
          </div>
        ) : (
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
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
