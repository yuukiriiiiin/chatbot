import react from 'react';
import styles from './index.module.scss';

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
  label: string;
  hasError?: boolean;
  edited?: boolean;
};

export const Textarea: React.VFC<Props> = ({
  value,
  name,
  label,
  hasError,
  placeholder,
  onChange,
  edited,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__labelArea}>
        <label className={styles.root__label} htmlFor={name}>
          {label}
        </label>
      </div>
      <textarea
        className={styles.root__textarea}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        data-is-error={hasError}
      />
    </div>
  );
};
