import React, { useEffect } from 'react'

//redux
import { connect } from 'react-redux'
import { postSmurf, getSmurf } from '../store/actions'

//hooks
import { useInput } from '../hooks/useInput'

const SmurfForm = ({ state, postSmurf}) => {
    const [smurfName, setSmurfName, handlesmurfName] = useInput("");
    const [smurfAge, setSmurfAge, handleSmurfAge] = useInput("");
    const [smurfHeight, setSmurfHeight, handleHeight] = useInput("");

    const newSmurf = {
        name: smurfName,
        age: smurfAge,
        height: smurfHeight,
        id: state.smurfs.length -1
    }


    const submitHandler = (e) => {
        e.preventDefault()
        postSmurf(newSmurf)
        getSmurf()
        setSmurfName('')
        setSmurfAge('')
        setSmurfHeight('')
    }
    
    return (
        <>
            <form onSubmit= {submitHandler}>
                <input
                type= 'text'
                placeholder= 'smurf name'
                onChange={e => handlesmurfName(e.target.value)}
                value={smurfName}

                />
                <input
                type= 'text'
                placeholder= 'smurf age'
                onChange={e => handleSmurfAge(e.target.value)}
                value={smurfAge}

                />
                <input
                type= 'text'
                placeholder= 'smurf height'
                onChange={e => handleHeight(e.target.value)}
                value={smurfHeight}

                />
                <button>Add Smurf</button>
            </form>
        </>
    )
}

const mapStateToProps = state =>{
    return {
        state: state,
    }
}

export default connect(mapStateToProps, { postSmurf, getSmurf })(SmurfForm);