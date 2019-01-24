import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromHistoryList } from '../../../actions';
import PropTypes from 'prop-types';
import { unitSymbols } from '../../../services/openweathermap/units';
import style from './style.scss';
import { dispatch } from 'rxjs/internal/observable/range';
import { RemoveButton } from './removeButton';

class SearchHistoryList extends Component {

    removeItem = id => this.props.removeItemFromHistoryList(id);

    render() {
        
        return(
            <div>
                {
                    this.props.list.map(item => {

                        return <div
                                    key={item.id}
                                    className={style.listItem}
                                    title={
                                        `${item.history.name} (${item.history.sys.country}), Temp: ${item.history.main.temp}°C`
                                    }
                                >
                                    <div>
                                        <div>
                                        {item.history.name} {item.history.main.temp}{unitSymbols[item.tempType]}
                                        </div>
                                        <div
                                            className={style.dateTime}
                                        >
                                            {item.date.toLocaleString()}
                                        </div>
                                    </div>
                                    <RemoveButton
                                        id={item.id}
                                        removeItem={this.removeItem}
                                    >
                                    </RemoveButton>
                                </div>
                    })
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeItemFromHistoryList: id => dispatch(removeItemFromHistoryList(id))
});

export default connect(null, mapDispatchToProps)(SearchHistoryList);