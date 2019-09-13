import React from 'react'

//redux
import { connect } from 'react-redux'
import { deleteSmurf } from '../store/actions'


const Smurf = (props) => {
    
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <h4>{props.smurf.age}</h4>
            <h4>{props.smurf.height}</h4>
            <button 
            onClick= {() => {props.deleteSmurf(props.smurf.id)}}
            >Remove Smurf</button>
            <button>Update Smurf</button>
        </div>
    )
}

export default connect(null, { deleteSmurf })(Smurf)