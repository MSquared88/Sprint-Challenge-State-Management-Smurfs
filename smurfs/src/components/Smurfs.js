import React, { useEffect} from 'react'

// components
import Smurf from './Smurf'

//redux
import { connect } from 'react-redux'
import { getSmurf } from '../store/actions'



function  Smurfs({ state, getSmurf }) {


    useEffect(() => {
        getSmurf()
    }, [])
    console.log(state)
    return (
        <div>
            {state.smurfs.map(smurf => (
                <Smurf smurf={smurf}/>
            ))}
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        state: state,
    }
}

export default connect(mapStateToProps, { getSmurf })(Smurfs);