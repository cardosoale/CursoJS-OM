import { combineReducers } from 'redux';

import exampleReducer from '../modules/example/reducer';

export default combineReducers({
  example: exampleReducer,
});
