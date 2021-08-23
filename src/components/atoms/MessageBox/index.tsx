import React from 'react';
import styles from './index.module.scss';

type MessageType = 'bot' | 'reply';

type Props = {
  messageType: MessageType;
};

export const MessageBox: React.FC<Props> = ({ messageType, children }) => {
  return (
    <div
      className={styles.root}
      data-theme={messageType === 'bot' ? 'bot' : 'reply'}>
      {children}
    </div>
  );
};
