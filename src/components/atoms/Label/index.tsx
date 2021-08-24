import react from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

export type Props = {
  name: string;
  label: string;
};

export const Label: React.VFC<Props> = ({ name, label }) => {
  return (
    <label className={styles.root} htmlFor={name}>
      {label}
    </label>
  );
};
