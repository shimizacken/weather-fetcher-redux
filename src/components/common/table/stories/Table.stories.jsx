import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { getSection, Parent, Child } from 'app/stories/sections';
import { content } from 'app/stories/decorators';
import {
  HistoryTableHeaderRenderer,
  HistoryTableRowRenderer,
  historyTableHeadersBuilder,
  historyTableColumnsBuilder
} from 'app/features/searchHistory';
import { Table } from '../Table';
import styles from './Table.stories.module.scss';

export default {
  title: getSection(Parent.tabular, Child.table),
  component: Table,
  decorators: [withKnobs, content(styles.customWrapper)]
};

const headers = historyTableHeadersBuilder();

const items = [
  {
    id: '768fe480-c281-4b4a-9aa2-27256d0175ed',
    name: 'Sætre',
    currentWeather: 'Clear',
    description: 'clear sky',
    country: 'NO',
    temperature: 16.5,
    icon: '01d',
    tempType: {
      name: 'celsius',
      value: 'metric',
      symbol: '°C'
    },
    date: 1587550169591
  },
  {
    id: '3fe3cb99-1c04-4d62-8fe3-e24fea5cd0ec',
    name: 'Sætre',
    currentWeather: 'Clear',
    description: 'clear sky',
    country: 'NO',
    temperature: 16.5,
    icon: '01d',
    tempType: {
      name: 'celsius',
      value: 'metric',
      symbol: '°C'
    },
    date: 1587549825207
  },
  {
    id: 'ac91c8b4-9dbb-4fa0-8c81-9b8655f9b12d',
    name: 'London',
    currentWeather: 'Clear',
    description: 'clear sky',
    country: 'GB',
    temperature: 15.58,
    icon: '01d',
    tempType: {
      name: 'celsius',
      value: 'metric',
      symbol: '°C'
    },
    date: 1587549730864
  }
];

const rows = historyTableColumnsBuilder(items);

export const TableStory = () => (
  <Table
    headers={headers}
    items={rows}
    tableClassName={styles.someColumn}
    headerRenderer={HistoryTableHeaderRenderer}
    rowRenderer={HistoryTableRowRenderer}
  />
);
