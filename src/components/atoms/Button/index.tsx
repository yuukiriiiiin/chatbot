import React from 'react';
import styles from './button.module.scss';

type Props = {
  disabled: boolean;
  type?: 'primary' | 'default';
  fit?: boolean;
  onClick?: (e: any) => void;
};

export const Button: React.FC<Props> = ({
  disabled,
  type = 'primary',
  fit,
  children,
  onClick,
}) => {
  return (
    <button
      className={styles.root}
      type="button"
      disabled={disabled}
      data-is-fit={fit}
      data-is-default={type === 'default'}
      onClick={onClick}>
      {children}
    </button>
  );
};
