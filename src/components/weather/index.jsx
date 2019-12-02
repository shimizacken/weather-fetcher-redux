import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../common';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import { SET_WEATHER,
            SET_TEMP_TYPE,
            ADD_TO_SEARCH_HISTORY,
            API } from '../../constants';
import { WeatherDetails } from './details';
import { Loader } from '../portal/loader';
import { ErrorMessage } from './errorMessage';
import { MetricRadioButtons } from './metricRadioButtons';
import { setWeather } from '../../actions';
import styles from './styles.scss';

class WeatherContainer extends Component {

    state = {
        cityName: '',
        icon: '',
        main: '',
        description: '',
        errorMessage: ''
    };
    
    componentDidMount() {

        this.searchByCityNameUrl = buildApiUrl(token(), this.props.metricType);   
    }

    componentDidUpdate() {

        this.searchByCityNameUrl = buildApiUrl(token(), this.props.metricType);
    }
    
    search = (e) => {

        e.preventDefault();

        if (this.state.cityName === '') {
            
            return;
        }
        
        this.setState({
            errorMessage: ''
        });

        this.props.setWeather('');

        const url = this.searchByCityNameUrl(this.state.cityName);
        this.props.fetchWeather(url);
    }

    onChange = (e) => {

        this.setState({
            cityName: e.target.value
        });
    }

    radioChanged = e => {

        this.props.setTempType(e.target.value);
    }

    render() {
        
        return(
            <div
                className={styles.mainWeatherWrapper}
            >
                <div
                    className={styles.innerWrapper}
                >
                    <form
                        onSubmit={this.search}
                    >
                        <SearchBox
                            value={this.state.cityName}
                            onChange={this.onChange}
                            displayLoader={this.props.fetchWeatherFlag}
                        />
                    </form>
                    <MetricRadioButtons
                        radioChanged={this.radioChanged}
                    />
                    <div
                        className={styles.resultsWrapper}
                    >
                        {
                            this.props.weather ? 
                                <div
                                    className={styles.detailsWrapper}
                                >
                                    <WeatherDetails
                                        data={this.props.weather}
                                    />
                                </div> :  null
                        }
                        {
                            this.props.fetchWeatherFlag && <Loader />
                        }
                        <ErrorMessage
                            errorMessage={this.state.errorMessage}
                        />
                    </div>          
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    weather: state.weather,
    metricType: state.metricType,
    searchHistory: state.searchHistory,
    fetchWeatherFlag: state.fetchWeatherFlag
});

const mapDispatchToProps = dispatch => ({
    fetchWeather: url => dispatch({
        type: API,
        payload: {
            url: url,
            success: (weather) => setWeather(weather)
        }
    }),
    setWeather: weather => dispatch({
        type: SET_WEATHER,
        weather
    }),
    setTempType: tempType => dispatch({
        type: SET_TEMP_TYPE,
        tempType
    })
});

const connected = connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);

export { connected as WeatherContainer };