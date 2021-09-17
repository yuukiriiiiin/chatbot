import react from 'react';
import { BotMessage } from '../../molecules/BotMessage';
import { ReplyMessage, ReplyMessageProps } from '../../molecules/ReplyMessage';
import styles from './index.module.scss';

export type BotMessageType = {
  messageType: 'bot';
  text: string;
};

export type ReplyMessageType = {
  messageType: 'reply';
  reply: ReplyMessageProps[];
  onClick: () => void;
};

export type Message = BotMessageType | ReplyMessageType;

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
            <ReplyMessage reply={message.reply} onClick={message.onClick} />
          </div>
        )
      )}
    </div>
  );
};
