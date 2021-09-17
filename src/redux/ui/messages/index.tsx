import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import {
  Message,
  ReplyMessageType,
} from '../../../components/organisms/MessageArea/MessageArea';
import { RootState } from '../../configureStore';
import { next, Tuple } from '../progressState';
import { ReplyMessageProps } from '../../../components/molecules/ReplyMessage';

const actionCreator = actionCreatorFactory('inquiry');

type Value = {
  current: Tuple;
  value: string;
};
export const pushMessage = actionCreator<Value>('push message');

const INITIAL_STATE: Message[] = [
  {
    messageType: 'bot',
    text: 'お名前を教えてください。',
  },
];

const createReplyMessage = (reply: ReplyMessageProps[]): ReplyMessageType => {
  return {
    messageType: 'reply',
    reply,
    onClick: () => {},
  };
};

interface MessageTemplate {
  [key: string]: {
    label: string;
    type: string;
    name: string;
    next: {
      messageType: 'bot';
      text: string;
    };
  };
}
const messageTemplate: MessageTemplate = {
  name: {
    label: 'お名前',
    type: 'name',
    name: 'name_input',
    next: {
      messageType: 'bot',
      text: 'メールアドレスを入力してください',
    },
  },
  email: {
    label: 'メールアドレス',
    type: 'email',
    name: 'email_input',
    next: {
      messageType: 'bot',
      text: '電話番号を入力してください',
    },
  },
  tel: {
    label: '電話番号',
    type: 'tel',
    name: 'tel_input',
    next: {
      messageType: 'bot',
      text: 'お問い合わせ内容を入力してください',
    },
  },
};

export const reducer = reducerWithInitialState(INITIAL_STATE) //
  .case(next, (state, { current, value }) => {
    if (current === 'name') {
      return [
        ...state,
        createReplyMessage(
          new Array({
            label: 'お名前',
            type: 'name',
            name: 'name_input',
            value,
          })
        ),
        messageTemplate[current].next,
      ];
    }
    if (current === 'email') {
      return [
        ...state,
        createReplyMessage(
          new Array({
            label: 'メールアドレス',
            type: 'email',
            name: 'email_input',
            value,
          })
        ),
        messageTemplate[current].next,
      ];
    }
    if (current === 'tel') {
      return [
        ...state,
        createReplyMessage(
          new Array({
            label: '電話番号',
            type: 'tel',
            name: 'tel_input',
            value,
          })
        ),
        messageTemplate[current].next,
      ];
    }
    if (current === 'message') {
      return [
        ...state,
        createReplyMessage(
          new Array({
            label: 'その他ご要望',
            type: 'message',
            name: 'message_input',
            value,
          })
        ),
        messageTemplate[current].next,
      ];
    }
    return state;
  });

export const selectMessages = createSelector(
  [(state: RootState) => state.ui.messages],
  messages => ({
    messages,
  })
);

export type SelectedMessages = ReturnType<typeof selectMessages>;
export type State = typeof INITIAL_STATE;
