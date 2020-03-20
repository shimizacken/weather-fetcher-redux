import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RadioButton } from '../RadioButton';

export default {
  title: 'Inputs/Radio',
  component: RadioButton,
  decorators: [withKnobs]
};

export const Text = () => (
  <>
    <RadioButton
      text="Red"
      checked={boolean('checked', true)}
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      name="rgb"
    />
    <RadioButton text="Green" disabled={boolean('disabled', false)} onClick={action('clicked')} name="rgb" />
    <RadioButton text="Blue" disabled={boolean('disabled', false)} onClick={action('clicked')} name="rgb" />
  </>
);
