import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RadioButton } from '../RadioButton';
import { content } from 'app/stories/decorators/content';
import styles from './RadioStories.scss';

export default {
  title: 'Inputs/Radio',
  component: RadioButton,
  decorators: [withKnobs, content]
};

export const Text = () => (
  <div>
    <RadioButton
      text="Red"
      checked={true}
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      name="rgb"
      className={styles.radio}
    />
    <RadioButton
      text="Green"
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      name="rgb"
      className={styles.radio}
    />
    <RadioButton
      text="Blue"
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      name="rgb"
      className={styles.radio}
    />
  </div>
);
