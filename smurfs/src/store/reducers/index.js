import { 
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAIL,
    POSTING_SMURF_START,
    POSTING_SMURF_SUCCESS,
    POSTING_SMURF_FAIL,
} from '../actions'


const initialState = {
    smurfs: [],
    fetching: false,
    posting: false,
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
        default: 
        return state;
    };
};