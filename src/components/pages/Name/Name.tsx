import react from 'react';
import { Props as TextFieldProps } from '../../molecules/TextFieldRow';
import { TextFieldRow } from '../../molecules/TextFieldRow';
import { FormArea } from '../../organisms/FormArea/FormArea';
import { Message, MessageArea } from '../../organisms/MessageArea/MessageArea';
import styles from './index.module.scss';

type FormProps = {
  form: {
    name: string;
    email: string;
    tel: string;
    checked: string;
    message: string;
  };
  edited: {
    name: boolean;
    email: boolean;
    tel: boolean;
    message: boolean;
  };
  validationErrors: {
    name: { error: boolean; message: string };
    email: { error: boolean; message: string };
    tel: { error: boolean; message: string };
    message: { error: boolean; message: string };
  };
};

type Props = {
  messages?: Message[];
  progress?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & FormProps;

export const Name: React.VFC<Props> = ({
  messages,
  progress,
  onChange,
  form,
  edited,
  validationErrors,
}) => {
  return (
    <div className={styles.root}>
      <MessageArea messages={[]} />
      <div className={styles.root__form}>
        <FormArea progress={0}>
          <TextFieldRow
            type={'name'}
            label={'お名前'}
            required
            value={form.name}
            onChange={onChange}
            name={'name'}
            hasError={validationErrors.name.error}
            edited={edited.name}
            errorMessage={validationErrors.name.message}
            placeholder={'お名前を入力してください'}
          />
        </FormArea>
      </div>
    </div>
  );
};
