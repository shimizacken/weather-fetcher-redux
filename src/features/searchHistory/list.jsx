import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './item';
import { removeItemFromHistoryList, removeItemFromHistoryListEnded } from './state/actions';
import style from './style.scss';

class SearchHistoryList extends Component {

    removeItem = id => {
        this.props.removeItemFromHistoryList(id);
        this.props.removeItemFromHistoryListEnded();
    }

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
                                    removeItem={this.removeItem}
                                />
                    })
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeItemFromHistoryList: id => dispatch(removeItemFromHistoryList(id)),
    removeItemFromHistoryListEnded: id => dispatch(removeItemFromHistoryListEnded())
});

export default connect(null, mapDispatchToProps)(SearchHistoryList);