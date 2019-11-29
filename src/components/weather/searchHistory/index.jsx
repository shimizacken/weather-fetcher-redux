import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './list';
import style from './style.scss';

class SearchHistoryContainer extends Component {
  render() {
    if (!this.props.searchHistory) {
      return null;
    }

    return (
      <div className={style.searchHistoryPanel}>
        <h4>History ({this.props.searchHistory.length})</h4>
        <List list={this.props.searchHistory.reverse()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchHistory: state.searchHistory
});

export default connect(mapStateToProps)(SearchHistoryContainer);
