import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { getSection, Parent, Child } from 'app/stories/sections';
import { content } from 'app/stories/decorators';
import { SearchBox } from '../SearchBox';

export default {
  title: getSection(Parent.features, Child.textInput),
  component: SearchBox,
  decorators: [withKnobs, content()]
};

export const SearchWeather = () => (
  <SearchBox value={text('value', 'Oslo')} disabled={boolean('disabled', false)} onChange={action('changed')} />
);
