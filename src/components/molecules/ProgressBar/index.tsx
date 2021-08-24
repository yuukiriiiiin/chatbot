import react from 'react';
import { MessageBox } from '../../atoms/MessageBox';
import styles from './index.module.scss';

type Props = {
  progress: number;
  total?: number;
};

export const ProgressBar: React.VFC<Props> = ({ progress, total = 3 }) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__baseProgress}>
        <div
          className={styles.root__progress}
          style={{ width: `calc(100%/${total} * ${progress})` }}></div>
      </div>
      <div className={styles.root__label}>
        残り<span className={styles.root__num}>{total - progress}</span>ステップ
      </div>
    </div>
  );
};
