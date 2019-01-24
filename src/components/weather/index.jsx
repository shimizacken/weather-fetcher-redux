import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import { SET_WEATHER, SET_CURRENT_WEATHER } from '../../constants';
import WeatherDetails from './details';
import { Loader } from '../portal/loader';
import { request } from '../../services/net/fetch';
import { ErrorMessage } from './errorMessage';
import { TempRadioButtons } from './tempRadiobuttons';
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
    
    searchByCityName = buildApiUrl(token(), this.props.currentTempType);

    updateHistorylist = result => {

        let newArr = [];

        if (this.props.historyList) {
        
            newArr = this.props.historyList.slice(0);
        }
        
        newArr.push({
            id: uniqid(),
            history: result,
            tempType: this.props.currentTempType,
            date: new Date()
        })

        this.props.searchHistory.setHistory(newArr);
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
                    //this.updateHistorylist(result);
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

    radioChanged = e => {

        this.props.weather.setTempType(e.target.value);
        this.searchByCityName = buildApiUrl(token(), this.props.currentTempType);
    }

    render() {
        console.log('rendered', this.props.weather);
        
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
                    <TempRadioButtons radioChanged={this.radioChanged} />
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
    currentTempType: state.currentTempType,
    historyList: state.historyList
});

const mapDispatchToProps = dispatch => ({
    setWeather: weather => dispatch({
        type: SET_WEATHER,
        weather
    }),
    setCurrentWeather: currentWeather => dispatch({
        type: SET_CURRENT_WEATHER,
        currentWeather
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);