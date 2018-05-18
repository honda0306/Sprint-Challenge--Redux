import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const URL = `http://localhost:3333/smurfs`;

export const fetchSmurfs = () => {
  const getSmurfs = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    getSmurfs
      .then(response => {
        console.log(response);
        dispatch({ type: SUCCESS, payload: response.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR, payload: "Error Fetching Smurfs" });
      });
  };
};

export const createSmurf = smurf => {
  const addSmurf = axios.post(URL, smurf)
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    addSmurf
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'Error adding smurf'});
      });
  };
};