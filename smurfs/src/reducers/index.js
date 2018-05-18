import { FETCHING_SMURFS, SUCCESS, ERROR } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SUCCESS:
      return Object.assign({}, state, { 
        smurfs: action.payload, 
        fetchingSmurfs: false, 
        updatingSmurf: false, 
        addingSmurf: false, 
        deletingSmurf: false ,
        error: null
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    default: 
      return state;
  }
};

export default (state = initialState, action) => {
  return state;
};