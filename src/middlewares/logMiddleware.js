export const logMiddleware = ({ getState }) => next => action => {
  // logMiddleware

  //console.log('Redux Logger - before', action.type, getState());
  console.log('logMiddleware, next: ', next);

  next(action);
  //console.log('Redux Logger - after', action.type, getState());

};
