import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import { SET_WEATHER,
            SET_TEMP_TYPE,
            ADD_TO_SEARCH_HISTORY,
            API } from '../../constants';
import WeatherDetails from './details';
import { Loader } from '../portal/loader';
import { ErrorMessage } from './errorMessage';
import { MetricRadioButtons } from './metricRadiobuttons';
const uniqid = require('uniqid');
import styles from './styles.scss';
import { setWeather } from '../../actions';

class WeatherContainer extends Component {

    state = {
        cityName: '',
        icon: '',
        main: '',
        description: '',
        errorMessage: ''
    };
    
    componentDidMount() {

        this.searchByCityName = buildApiUrl(token(), this.props.metricType);        
    }

    updateHistorylist = result => {

        this.props.setHistory({
            id: uniqid(),
            history: result,
            tempType: this.props.metricType,
            date: new Date()
        });
    }

    search = (e) => {

        e.preventDefault();

        if (this.state.cityName === '') {
            
            return;
        }
        
        this.setState({
            errorMessage: ''
        });

        this.props.setWeather();

        const url = this.searchByCityName(this.state.cityName);
        this.props.fetchWeather(url);
    }

    onChange = (e) => {

        this.setState({
            cityName: e.target.value
        });
    }

    componentDidUpdate() {

        this.searchByCityName = buildApiUrl(token(), this.props.metricType);
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
                        <SearchBoxContainer
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
                            this.props.fetchWeatherFlag ? <Loader /> : null
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
    historyList: state.historyList,
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
    }),
    setHistory: history => dispatch({
        type: ADD_TO_SEARCH_HISTORY,
        history
    }),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);