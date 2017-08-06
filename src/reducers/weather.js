import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  // console.log('action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // using state.push would mutate the array(state) and thats not allowed
      // using state.concat returns a new array(state)
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; // this is identical to above, es6 syntax. '...state' takes an existing array and flattening it out to create a new one
  }


  return state;
}
