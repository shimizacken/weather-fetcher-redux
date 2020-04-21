import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { getSection, Parent, Child } from 'app/stories/sections';
import { content } from 'app/stories/decorators';
import { TextInput } from '../TextInput';

export default {
  title: getSection(Parent.inputs, Child.textInput),
  component: TextInput,
  decorators: [withKnobs, content]
};

export const Text = () => (
  <TextInput
    value={text('value', 'Some text')}
    placeholder={text('placeholder', 'Enter text...')}
    disabled={boolean('disabled', false)}
    onChange={action('changed')}
  />
);
