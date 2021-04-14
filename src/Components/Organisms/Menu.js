import React from 'react'
import Scrollbar from '../Atoms/Scrollbar'
import ButtonControl from '../Molecules/ButtonControl'

function Menu() {
    return (
        <>
            <Scrollbar />
            <br/>
            <h4 style={{fontWeight: "bold"}}>MENU</h4>
            <ButtonControl />
        </>
    )
}

export default Menu
