import react from 'react';
import styles from './index.module.scss';

export type Props = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: any) => void;
};

export const RadioButton: React.VFC<Props> = ({
  value,
  name,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className={styles.root}>
      <input
        type="radio"
        name={name}
        id={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
