import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { getSection, Parent, Child } from 'app/stories/sections';
import { content } from 'app/stories/decorators/content';
import { Table } from '../Table';

export default {
  title: getSection(Parent.tabular, Child.table),
  component: Table,
  decorators: [withKnobs, content]
};

const headerItems = ['id', 'City Name', 'Country', 'Temperature', 't', 'description', 'Date'];

const rowItems = [
  {
    id: 1,
    cityName: 'Haifa',
    country: 'IL',
    temperature: '16',
    t: '',
    description: 'Clouds',
    date: 1586928548159
  },
  {
    id: 2,
    cityName: 'Oslo',
    country: 'NO',
    temperature: '4.95',
    t: '',
    description: 'Clouds',
    date: 1586928544844
  }
];

export const TableStory = () => <Table headerItems={headerItems} rowItems={rowItems} />;
