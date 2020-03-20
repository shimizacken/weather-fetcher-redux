import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Button } from '../Button';
import { ButtonTypes } from '../buttonTypes';
import { content } from '../../../../../stories/decorators/content';

export default {
  title: 'Inputs/Button',
  component: Button,
  decorators: [withKnobs, content]
};

export const Text = () => (
  <Button
    text={text('text', 'Hello Button')}
    disabled={boolean('disabled', false)}
    buttonType={select('ButtonTypes', ButtonTypes, ButtonTypes.BUTTON)}
    onClick={action('clicked')}
  />
);
