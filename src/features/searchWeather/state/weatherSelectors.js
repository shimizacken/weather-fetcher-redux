export const selectSearchResult = state => state?.weatherSearch?.searchResult?.weather;

export const selectIsSearchWeatherFetching = state => state?.weatherSearch?.fetchingWeatherApiState?.isFetching;

export const selectIsSearchWeatherFailed = state => state?.weatherSearch?.fetchingWeatherApiState?.isError;

export const selectIsSearchWeatherErrorMessage = state => state?.weatherSearch?.fetchingWeatherApiState?.errorMessage;
