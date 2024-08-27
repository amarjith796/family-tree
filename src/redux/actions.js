// src/redux/actions.js
export const ADD_FAMILY_DATA = 'ADD_FAMILY_DATA';

export const addFamilyData = (familyData) => ({
  type: ADD_FAMILY_DATA,
  payload: familyData,
});