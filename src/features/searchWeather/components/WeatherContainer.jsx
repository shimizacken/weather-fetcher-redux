import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    MetricRadioButtons,
    setTempUnit,
    selectMetricType,
} from 'app/features/metricType';
import {
    buildFetchWeatherByCityName,
    buildFetchWeatherByGeographicCoordinates,
} from '../bll/api';
import {fetchWeather} from '../bll/fetchWeather';
import {
    selectIsSearchWeatherFetching,
    selectIsSearchWeatherFailed,
    selectIsSearchWeatherErrorMessage,
} from '../state/weatherSelectors';
import {searchWeather, setWeather} from '../state/weatherActions';
import {WeatherDetailsContainer} from './details/WeatherDetailsContainer';
import {ErrorMessage} from './ErrorMessage';
import {Units, getToken} from 'app/services/openWeatherMap';
import {Loader, SearchBox} from 'app/components/common';
import {getGeoLocation} from 'app/services/geolocation/getGeoLocation';
import styles from './WeatherContainer.scss';

export const WeatherContainer = () => {
    const dispatch = useDispatch();
    const [cityName, setCityName] = useState('');

    const isSearchWeatherFetching = useSelector(selectIsSearchWeatherFetching);
    const isSearchWeatherFailed = useSelector(selectIsSearchWeatherFailed);
    const searchWeatherErrorMessage = useSelector(
        selectIsSearchWeatherErrorMessage
    );
    const metricType = useSelector(selectMetricType);

    const searchByCityNameUrl = buildFetchWeatherByCityName(
        getToken(),
        metricType
    );

    const success = position => {
        const url = buildFetchWeatherByGeographicCoordinates(
            getToken(),
            metricType
        )(position.coords.latitude, position.coords.longitude);

        resetDetails();

        dispatch(searchWeather(() => fetchWeather(url)));
    };

    const error = () => 'Unable to retrieve your location';

    const resetDetails = () => {
        dispatch(setWeather({}));
    };

    const search = e => {
        e.preventDefault();

        if (cityName === '') {
            return;
        }

        resetDetails();

        const url = searchByCityNameUrl(cityName);

        dispatch(searchWeather(() => fetchWeather(url)));
    };

    const onChange = e => {
        setCityName(e.target.value);
    };

    const radioChanged = e => {
        resetDetails();
        dispatch(setTempUnit(Units[e.target.value]));
    };

    useEffect(() => {
        getGeoLocation(success, error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.mainWeatherWrapper}>
            <div className={styles.innerWrapper}>
                <form onSubmit={search}>
                    <SearchBox
                        value={cityName}
                        onChange={onChange}
                        disabled={isSearchWeatherFetching}
                    />
                </form>
                <MetricRadioButtons radioChanged={radioChanged} />
                <div className={styles.resultsWrapper} data-cy="search-results">
                    <div className={styles.detailsWrapper}>
                        <WeatherDetailsContainer />
                    </div>
                    {isSearchWeatherFetching && <Loader />}
                    {isSearchWeatherFailed && (
                        <ErrorMessage
                            errorMessage={searchWeatherErrorMessage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
