import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { combine, required, regexp, minLength, maxLength } from 'favalid';
import { createSelector } from 'reselect';
import { RootState } from '../../configureStore';

const actionCreator = actionCreatorFactory('inquiry');

type ChangePayload = {
  value: string;
};

export const changeName = actionCreator<ChangePayload>('change name');
export const changeEmail = actionCreator<ChangePayload>('change email');
export const changeTel = actionCreator<ChangePayload>('change tel');

const INITIAL_STATE = {
  form: {
    name: '',
    email: '',
    tel: '',
    checked: '0',
    message: '',
  },
  edited: {
    name: false,
    email: false,
    tel: false,
    message: false,
  },
  validationErrors: {
    name: { error: false, message: '' },
    email: { error: false, message: '' },
    tel: { error: false, message: '' },
    message: { error: false, message: '' },
  },
};

// validation
const nameRequiredMessage = () => 'お名前は必須です';
const nameFormatMessage = () => '全角または半角英字のみ';
const emailRequiredMessage = () => 'メールアドレスは必須です';
const emailFormatMessage = () => '入力に誤りがあります';
const telLengthMessage = () => '10〜11文字で入力してください';
const telFormatMessage = () => '半角数字で入力してください';

// /* eslint-disable-next-line */
const nameRegexp = /[!"#$%&¥\\'()*+,\-./\d:;<=>?@{|}~\[\]^_`｡｢｣､･ｦ-ﾟ]/;
/* eslint-disable-next-line */
const emailRegexp =
  /^[!#$%&'*+\-./=?^_`{|}~\[\]0-9a-zA-Z]+@[a-z0-9-_]+(\.[a-z0-9-_]+)+$/;
const telRegexp = /^[0-9]+$/;

const usernameValidator = combine(
  required(nameRequiredMessage)
  // regexp(nameRegexp, nameFormatMessage)
);

const emailValidator = combine(
  required(emailRequiredMessage),
  regexp(emailRegexp, emailFormatMessage)
);

const telValidator = combine(
  regexp(telRegexp, telFormatMessage),
  minLength(9, telLengthMessage),
  maxLength(12, telLengthMessage)
);

const validator = (form: typeof INITIAL_STATE.form) => ({
  name: usernameValidator(form.name),
  email: emailValidator(form.email),
  tel: telValidator(form.tel),
  // TODO: fix
  message: { error: false, message: '' },
});

export const reducer = reducerWithInitialState(INITIAL_STATE) //
  .case(changeName, (state, payload) => {
    const form = { ...state.form, name: payload.value };
    const validationErrors = validator(form);
    const edited = { ...state.edited, name: true };
    return { ...state, form, edited, validationErrors };
  });
// .case(changeEmail, (state, payload) => {
//   const form = { ...state.form, email: payload.value };
//   const validationErrors = validator(form);
//   const edited = { ...state.edited, email: true };
//   return { ...state, form, edited, validationErrors };
// });

export const selectInquiry = createSelector(
  [
    (state: RootState) => state.ui.inquiry.form,
    (state: RootState) => state.ui.inquiry.edited,
    (state: RootState) => state.ui.inquiry.validationErrors,
  ],
  (form, edited, validationErrors) => ({
    form,
    edited,
    validationErrors,
  })
);

export type SelectedInquiry = ReturnType<typeof selectInquiry>;
export type State = typeof INITIAL_STATE;
