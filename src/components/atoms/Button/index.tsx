import React from 'react';
import styles from './button.module.scss';

type Props = {
  disabled: boolean;
  type?: 'primary' | 'default';
  fit?: boolean;
};

export const Button: React.FC<Props> = ({
  disabled,
  type = 'primary',
  fit,
  children,
}) => {
  return (
    <button
      className={styles.root}
      type="button"
      disabled={disabled}
      data-is-fit={fit}
      data-is-default={type === 'default'}>
      {children}
    </button>
  );
};
