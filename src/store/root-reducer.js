import { combineReducers } from 'redux';

import { themeReducer } from './theme/reducer';
import { countriesReducer } from './countries/reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});
