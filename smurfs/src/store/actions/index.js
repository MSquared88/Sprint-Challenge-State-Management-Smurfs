import axios from 'axios';

//get smurfs
export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAIL = 'FETCHING_SMURF_FAIL';

//post smurfs
export const POSTING_SMURF_START = 'POSTING_SMURF_START';
export const POSTING_SMURF_SUCCESS = 'POSTING_SMURF_SUCCESS';
export const POSTING_SMURF_FAIL = 'POSTING_SMURF_FAIL';

export const getSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START})
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        // console.log(res)
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {console.log(err)})
};

export const postSmurf = (newSmurf) => dispatch => {
    dispatch({type: POSTING_SMURF_START})
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
        console.log(res)
        dispatch({type: POSTING_SMURF_SUCCESS, payload: newSmurf})
    })
    .catch(err => {console.log(err)})
};

