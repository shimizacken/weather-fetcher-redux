import {
    SET_SEARCH_HISTORY,
    REMOVE_ITEM_FROM_HISTORY,
    END_REMOVE_ITEM_FROM_HISTORY,
    SET_TEMPERATURE_UNIT
  } from '../constants';
  
  export const setHistory = history => ({
    type: SET_SEARCH_HISTORY,
    history
  });
  
  export const removeItemFromHistoryList = id => ({
    type: REMOVE_ITEM_FROM_HISTORY,
    id
  });
  
  export const removeItemFromHistoryListEnded = () => ({
    type: END_REMOVE_ITEM_FROM_HISTORY
  });
  
  export const setTempUnit = tempType => ({
    type: SET_TEMPERATURE_UNIT,
    tempType
  })
  