import react from 'react';
import {Button} from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'Example/Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = () => <Button />;

export const Primaryy = Template.bind({});

