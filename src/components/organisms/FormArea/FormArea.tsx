import react from 'react';
import { BotMessage } from '../../molecules/BotMessage';
import { ProgressBar } from '../../molecules/ProgressBar';
import { ReplyMessage } from '../../molecules/ReplyMessage';
import { TextFieldRow } from '../../molecules/TextFieldRow';

type Props = {
  progress: number;
};

export const FormArea: React.FC<Props> = ({ progress, children }) => {
  return (
    <div>
      <ProgressBar progress={progress} />
      <div style={{ marginTop: '5px' }}>{children}</div>
    </div>
  );
};
