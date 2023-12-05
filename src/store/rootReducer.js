import { combineReducers } from 'redux';

import user from './slices/user';

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    user,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
