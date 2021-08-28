import react from 'react';
import { Props as TextFieldProps } from '../../molecules/TextFieldRow';
import { TextFieldRow } from '../../molecules/TextFieldRow';
import { FormArea } from '../../organisms/FormArea/FormArea';
import { Message, MessageArea } from '../../organisms/MessageArea/MessageArea';
import styles from './index.module.scss';

type Props = {
  messages: Message[];
  progress: number;
} & TextFieldProps;

export const Main: React.VFC<Props> = ({
  messages,
  progress,
  type,
  label,
  value,
  onChange,
  name,
  hasError,
  edited,
  errorMessage,
}) => {
  return (
    <div className={styles.root}>
      <MessageArea messages={[]} />
      <div className={styles.root__form}>
        <FormArea progress={progress}>
          <TextFieldRow
            type={type}
            label={label}
            value={value}
            onChange={onChange}
            name={name}
            hasError={hasError}
            edited={edited}
            errorMessage={errorMessage}
          />
        </FormArea>
      </div>
    </div>
  );
};
