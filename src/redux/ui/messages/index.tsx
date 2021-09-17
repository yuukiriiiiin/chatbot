import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { Message } from '../../../components/organisms/MessageArea/MessageArea';
import { RootState } from '../../configureStore';
import { Tuple } from '../progressState';
import { next } from '../progressState';

const actionCreator = actionCreatorFactory('inquiry');

type Value = {
  current: string;
  value: string;
};
export const pushMessage = actionCreator<Value>('push message');

const INITIAL_STATE: Message[] = [
  {
    messageType: 'bot',
    text: 'お名前を教えてください。',
  },
];

export const reducer = reducerWithInitialState(INITIAL_STATE) //
  .case(next, (state, { current, value }) => {
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
    return [
      ...state,
      {
        messageType: 'reply',
        reply: [
          {
            type: messageTemplate[current].type,
            value: value,
            name: messageTemplate[current].name,
            label: messageTemplate[current].label,
          },
        ],
        onClick: () => {},
      },
      messageTemplate[current].next,
    ];
  });

export const selectMessages = createSelector(
  [(state: RootState) => state.ui.messages],
  messages => ({
    messages,
  })
);

export type SelectedMessages = ReturnType<typeof selectMessages>;
export type State = typeof INITIAL_STATE;
