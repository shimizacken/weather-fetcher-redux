export const selectSearchResult = (state) => state?.weatherSearch?.searchResult?.weather;

export const selectFetchWeatherFlag = (state) => state?.weatherSearch?.isFetchingWeather;
