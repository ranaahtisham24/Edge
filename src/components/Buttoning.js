import React from 'react'
import { useState } from 'react'

const Buttoning = (props) => {
    const [btnName, setBtnName] = useState()
    console.log(props.value)
    return (
        <div>
            <button>{props}</button>
        </div>
    )
}

export default Buttoning
