import {
    //create
    POSTING_SMURF_START,
    POSTING_SMURF_SUCCESS,
    POSTING_SMURF_FAIL,

    //read
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAIL,

    //update
    // UPDATE_SMURF_START,
    // UPDATE_SMURF_SUCCESS,
    // UPDATE_SMURF_FAIL,

    //delete
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAIL,
    
} from '../actions'


const initialState = {
    smurfs: [],
    fetching: false,
    posting: false,
    deleting: false,
    err: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SMURF_START:
            return {
                ...state,
                fetching: true

            }
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state, 
                smurfs: action.payload,
                fetching: false
            }
        case FETCHING_SMURF_FAIL:
            return {
                ...state, 
                fetching: false,
                err: action.payload
            }

        case POSTING_SMURF_START:
            return {
                ...state, 
                posting: true
            }
        case POSTING_SMURF_SUCCESS:
            return {
                ...state, 
                posting: false,
                smurfs: [...state.smurfs, action.payload]
            }
        case POSTING_SMURF_FAIL:
            return {
                ...state, 
                posting: false,
                err: action.payload
            }    
        case DELETE_SMURF_START:
                return {
                    ...state, 
                    deleting: true
                }   
        case DELETE_SMURF_SUCCESS:
                return {
                    ...state, 
                    smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
                    posting: false
                }
        case DELETE_SMURF_FAIL:
                return {
                    ...state, 
                    error: action.payload
                } 
        
        default: 
        return state;
    };
};