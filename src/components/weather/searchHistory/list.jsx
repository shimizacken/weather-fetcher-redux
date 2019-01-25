import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromHistoryList } from '../../../actions';
import PropTypes from 'prop-types';
import style from './style.scss';
import { dispatch } from 'rxjs/internal/observable/range';
import Item from './item';

class SearchHistoryList extends Component {

    removeItem = id => this.props.removeItemFromHistoryList(id);

    render() {

        return(
            <div
                className={style.listItemInnerWrapper}
            >
                {
                    this.props.list.map(item => {

                        return <Item
                                    key={item.id}
                                    item={item}
                                />
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