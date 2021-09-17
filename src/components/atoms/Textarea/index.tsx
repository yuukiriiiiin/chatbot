import react from 'react';
import styles from './index.module.scss';

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
  hasError?: boolean;
  edited?: boolean;
};

export const Textarea: React.VFC<Props> = ({
  value,
  name,
  hasError,
  placeholder,
  onChange,
  edited,
}) => {
  return (
    <textarea
      className={styles.root__textarea}
      value={value}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      data-is-error={hasError}
    />
  );
};
