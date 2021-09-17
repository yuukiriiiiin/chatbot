import react from 'react';
import { MessageBox } from '../../atoms/MessageBox';
import styles from './index.module.scss';

export type ReplyMessageProps = {
  type: string;
  value: string;
  name: string;
  label: string;
};

type Props = {
  reply: ReplyMessageProps[];
  onClick: () => void;
};

export const ReplyMessage: React.VFC<Props> = ({ reply, onClick }) => {
  return (
    <MessageBox messageType={'reply'}>
      <div className={styles.root}>
        <div className={styles.root__buttonArea}>
          <button
            className={styles.root__button}
            type="button"
            onClick={onClick}>
            {'編集'}
          </button>
        </div>
        {reply.map(r => (
          <div className={styles.root__wrap}>
            <label className={styles.root__label} htmlFor={r.name}>
              {r.label}
            </label>
            <input
              className={styles.root__input}
              readOnly
              type={r.type}
              value={r.value}
              id={r.name}
              name={r.name}
            />
          </div>
        ))}
      </div>
    </MessageBox>
  );
};
