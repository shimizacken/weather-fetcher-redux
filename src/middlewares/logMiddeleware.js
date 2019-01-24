export const logMiddeleware = ({ dispatch, getState }) => next => action => {

    console.log('Redux Logger', action.type, getState());
    
    return next(action);
};