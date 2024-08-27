// src/redux/reducers.js
import { ADD_FAMILY_DATA } from './actions';

const initialState = {
  familyData: {},
};

const familyTreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAMILY_DATA:
      return {
        ...state,
        familyData: {...state.familyData, ...action.payload},
      };
    default:
      return state;
  }
};

export default familyTreeReducer;
