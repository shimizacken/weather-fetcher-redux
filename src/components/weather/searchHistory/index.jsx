import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './list';
import style from './style.scss';

class SearchHistoryContainer extends Component {

    render() {

        if (!this.props.historyList) {
            
            return null;
        }
        
        return(
            <div
                className={style.searchHistoryPanel}
            >
                <h4>
                    History ({this.props.historyList.length})
                </h4>
                <List
                    list={this.props.historyList.reverse()}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    historyList: state.historyList
});

export default connect(mapStateToProps)(SearchHistoryContainer);