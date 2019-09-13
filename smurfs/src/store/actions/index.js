import axios from 'axios';

//get smurfs
export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAIL = 'FETCHING_SMURF_FAIL';

//post smurfs
export const POSTING_SMURF_START = 'POSTING_SMURF_START';
export const POSTING_SMURF_SUCCESS = 'POSTING_SMURF_SUCCESS';
export const POSTING_SMURF_FAIL = 'POSTING_SMURF_FAIL';

//delete smurfs
export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL'

export const getSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START})
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        // console.log(res)
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch(dispatch({type: FETCHING_SMURF_FAIL, payload: err}))
        console.log(err)
    })
};

export const postSmurf = (newSmurf) => dispatch => {
    dispatch({type: POSTING_SMURF_START})
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
        console.log(res)
        dispatch({type: POSTING_SMURF_SUCCESS, payload: newSmurf})
    })
    .catch(err => {
        dispatch(dispatch({type: POSTING_SMURF_FAIL, payload: err}))
        console.log(err)
    })

}

export const deleteSmurf = (id) => dispatch => {
    dispatch({type: DELETE_SMURF_START})
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        console.log(res)
        dispatch({type: DELETE_SMURF_SUCCESS, payload: id})
    })
    .catch(err => {
        dispatch({ type:DELETE_SMURF_FAIL, payload: err})
        console.log(err)
    })
};