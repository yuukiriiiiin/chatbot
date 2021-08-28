import react from 'react';
import { Button } from '../../atoms/Button';
import { TextField } from '../TextField';
import styles from './index.module.scss';

type Props = {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
  required?: boolean;
  label: string;
  hasError: boolean;
  errorMessage: string;
  edited: boolean;
};

export const TextFieldRow: React.VFC<Props> = ({
  type,
  value,
  name,
  label,
  placeholder,
  required = false,
  hasError,
  errorMessage,
  edited,
  onChange,
}) => {
  return (
    <div className={styles.root__form}>
      <div className={styles.root__input}>
        <TextField
          type={type}
          value={value}
          name={name}
          label={label}
          placeholder={placeholder}
          required={required}
          hasError={hasError}
          errorMessage={errorMessage}
          onChange={onChange}
        />
      </div>
      <div className={styles.root__button}>
        <Button disabled={hasError || (required && !edited)}>次へ</Button>
      </div>
    </div>
  );
};
