import react from 'react';
import { MessageBox } from '../../atoms/MessageBox';
import styles from './index.module.scss';

type Props = {
  type: string;
  value: string;
  name: string;
  label: string;
  onClick: () => void;
};

export const ReplyMessage: React.VFC<Props> = ({
  type,
  value,
  name,
  label,
  onClick,
}) => {
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
        <div>
          <label className={styles.root__label} htmlFor={name}>
            {label}
          </label>
          <input
            className={styles.root__input}
            readOnly
            type={type}
            value={value}
            id={name}
            name={name}
          />
        </div>
      </div>
    </MessageBox>
  );
};
