import React from 'react'
import './stylesheets.css'

const parastyled = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const StyleSheets = () => {
    return (
        <>
            <h1 className="primary">CSS StyleSheets</h1>
            <p className="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum porro obcaecati, et quae quidem maiores consectetur. Nostrum, dicta veniam.</p>
            <p style={parastyled}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sit perferendis, id quaerat quae delectus. Dolorem, maxime impedit animi quo, doloribus distinctio, laborum blanditiis laboriosam itaque excepturi culpa officia recusandae ea. Velit corrupti adipisci iusto odio ipsa officia voluptas repudiandae?</p>
            <p style={{ color: 'red', backgroundColor: 'lightgrey'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis molestiae, nisi hic officia ea quam incidunt eum ipsa possimus quos in laborum. Natus reprehenderit asperiores in assumenda tempora earum harum!</p>
        </>
    )
}

export default StyleSheets
