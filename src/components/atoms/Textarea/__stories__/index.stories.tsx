import { Textarea } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/Textarea',
  component: Textarea,
};

const Template: ComponentStory<typeof Textarea> = ({ ...args }) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'さんぷるぅ',
  name: 'message',
  label: 'ご要望',
  placeholder: 'その他のご要望をご入力ください。',
  onChange: () => {},
};

export const HasError = Template.bind({});
HasError.args = {
  value:
    'さんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅさんぷるぅ',
  name: 'message',
  label: 'ご要望',
  placeholder: 'その他のご要望をご入力ください。',
  hasError: true,
  onChange: () => {},
};
