import React from 'react'

const Greetings = (props) => {
    const { name, children } = props;
    
    return (
        <>
            <h2>Hello {name}</h2>
            <p>{children}</p>
        </>
    )
}

export default Greetings
