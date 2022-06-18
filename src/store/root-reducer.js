import { combineReducers } from 'redux';

import { themeReducer } from './theme/reducer';
import { countriesReducer } from './countries/reducer';
import { controlsReducer } from './controls/reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
});
