import react from 'react';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';
import { Textarea } from '../../atoms/Textarea';
import styles from './index.module.scss';

type Props = {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
  required?: boolean;
  label: string;
  hasError?: boolean;
  errorMessage: string;
  edited?: boolean;
};

export const TextField: React.VFC<Props> = ({
  type,
  value,
  name,
  label,
  placeholder,
  required,
  hasError,
  errorMessage,
  edited,
  onChange,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__labelArea}>
        {hasError ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : (
          <Label label={label} name={name} />
        )}
      </div>
      {type === 'textarea' ? (
        <Textarea
          value={value}
          name={name}
          placeholder={placeholder}
          hasError={hasError}
          onChange={onChange}
        />
      ) : (
        <Input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          hasError={hasError}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};
