import react from 'react';
import { MessageBox } from '../../atoms/MessageBox';
import styles from './index.module.scss';

type Props = {
  text: string;
};

export const BotMessage: React.VFC<Props> = ({ text }) => {
  return (
    <MessageBox messageType={'bot'}>
      <p className={styles.root}>{text}</p>
    </MessageBox>
  );
};
