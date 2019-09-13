import React from 'react'


const Smurf = props => {
    
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <h4>{props.smurf.age}</h4>
            <h4>{props.smurf.height}</h4>
            <button>Remove Smurf</button>
            <button>Update Smurf</button>
        </div>
    )
}

export default Smurf