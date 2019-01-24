import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import { SET_WEATHER,
            SET_TEMP_TYPE,
            ADD_TO_SEARCH_HISTORY } from '../../constants';
import WeatherDetails from './details';
import { Loader } from '../portal/loader';
import { request } from '../../services/net/fetch';
import { ErrorMessage } from './errorMessage';
import { MetricRadioButtons } from './metricRadiobuttons';
const uniqid = require('uniqid');
import styles from './styles.scss';

class WeatherContainer extends Component {

    state = {
        cityName: '',
        icon: '',
        main: '',
        description: '',
        displayLoader: false,
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

    getWeather = () => {

        const url = this.searchByCityName(this.state.cityName);

        request(url)
            .then(result => {

                if (result.weather && result.weather.length > 0) {
                    
                    this.setState({
                        cityName: ''
                    });

                    this.props.setWeather(result);
                    this.updateHistorylist(result);
                }
                else {

                    if (result && result.message) {

                        this.setState({
                            errorMessage: result.message
                        });
                    }
                }
            })
            .catch(error => {

                this.setState({
                    errorMessage: error
                });
            })
            .finally(_ => {

                this.setState({
                    displayLoader: false
                });
            });
    }

    search = (e) => {

        e.preventDefault();

        if (this.state.cityName === '') {
            
            return;
        }
        
        this.setState({
            displayLoader: true,
            errorMessage: ''
        });

        this.props.setWeather();

        this.getWeather();
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
                            displayLoader={this.state.displayLoader}
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
                            this.state.displayLoader ? <Loader /> : null
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
    historyList: state.historyList
});

const mapDispatchToProps = dispatch => ({
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
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);