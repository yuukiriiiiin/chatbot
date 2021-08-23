import react from 'react';
import styles from './index.module.scss';

export const ErrorMessage: React.FC = ({ children }) => {
  return <p className={styles.root}>{children}</p>;
};
