/* eslint-disable no-undef */
import { randomAction } from 'app/state/common/randomAction';
import { searchResult } from '../searchResultReducer';
import { setWeather } from '../weatherActions';
import { searchResult as weatherMock } from './mock';

describe('searchResultReducer test suite', () => {
  it('should return initial state', () => {
    const action = randomAction();

    expect(searchResult(undefined, action)).toMatchSnapshot();
  });

  it('should return new state', () => {
    const action = setWeather(weatherMock);

    expect(searchResult(undefined, action)).toMatchSnapshot();
  });
});
