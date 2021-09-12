import react from 'react';
import { Tuple } from '../../../redux/ui/progressState';
import { RadioButton } from '../../atoms/RadioButton';
import { Checked } from '../../atoms/RadioButton/__stories__/index.stories';
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
  progress: number;
  current: Tuple;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: any) => void;
} & FormProps;

export const Name: React.VFC<Props> = ({
  messages,
  progress,
  current,
  onChange,
  onClick,
  form,
  edited,
  validationErrors,
}) => {
  const question = [
    { label: 'NURO 光 G2', name: 'kodate', value: '0' },
    { label: 'NURO 光 for マンション', name: 'manshon', value: '1' },
  ];
  return (
    <div className={styles.root}>
      <MessageArea messages={messages ?? []} />
      <div className={styles.root__form}>
        <FormArea progress={progress}>
          {current === 'name' && (
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
              onClick={onClick}
            />
          )}
          {current === 'email' && (
            <TextFieldRow
              type={'email'}
              label={'メールアドレス'}
              required
              value={form.email}
              onChange={onChange}
              name={'email'}
              hasError={validationErrors.email.error}
              edited={edited.email}
              errorMessage={validationErrors.email.message}
              placeholder={'メールアドレスを入力してください'}
              onClick={onClick}
            />
          )}
          {current === 'tel' && (
            <TextFieldRow
              type={'tel'}
              label={'電話番号'}
              value={form.tel}
              onChange={onChange}
              name={'tel'}
              hasError={validationErrors.tel.error}
              edited={edited.tel}
              errorMessage={validationErrors.tel.message}
              placeholder={'電話番号を入力してください'}
              onClick={onClick}
            />
          )}
          {current === 'message' && (
            <>
              {question.map(q => {
                return (
                  <RadioButton
                    label={q.label}
                    name={q.name}
                    value={q.value}
                    // TODO: fix
                    checked={false}
                    // TODO: fix
                    onChange={() => {}}
                  />
                );
              })}
              <TextFieldRow
                type={'text'}
                label={'その他お問い合わせ'}
                value={form.message}
                onChange={onChange}
                name={'message'}
                hasError={validationErrors.message.error}
                edited={edited.message}
                errorMessage={validationErrors.message.message}
                placeholder={''}
                onClick={onClick}
              />
            </>
          )}
        </FormArea>
      </div>
    </div>
  );
};
