import { sortHistoryList } from '../getPersistedHistoryList';

/* eslint-disable no-undef */
describe('selectSearchHistory test suite', () => {
  it('should return undefined when no argument is passed', () => {
    expect(sortHistoryList()).toMatchSnapshot();
  });

  it('should return empty array when historyList is empty', () => {
    const historyList = [];

    expect(sortHistoryList(historyList)).toMatchSnapshot();
  });

  it('should return date descending sorted list', () => {
    const historyList = [
      {
        name: 'Drammen',
        date: 12345
      },
      {
        name: 'Lysaker',
        date: 12343
      },
      {
        name: 'Oslo',
        date: 12344
      }
    ];

    expect(sortHistoryList(historyList)).toMatchSnapshot();
  });
});
