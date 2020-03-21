export const selectSearchResult = state => state?.searchResult?.weather;

export const selectMetricType = state => state?.metricType?.value;

export const selectCurrentMetricTypeSymbol = state => state?.metricType?.symbol;

export const selectSearchHistory = state => state?.searchHistory;

export const selectFetchWeatherFlag = state => state?.fetchWeatherFlag;
