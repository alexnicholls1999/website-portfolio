import React from 'react'
import PropTypes from "prop-types"
import CloseButton from '../Atoms/Buttons/CloseButton'
import ButtonControl from '../Molecules/ButtonControl'


function Menu({handleCloseClick}) {
    return (
        <> 
            <CloseButton onClick={handleCloseClick}/>
            <br/>
            <h4 style={{fontWeight: "bold"}}>MENU</h4>
            <ButtonControl />
        </>
    )
}

Menu.defaultProps = {
    handleCloseClick: () => {}
}

Menu.propTypes = {
    handleCloseClick: PropTypes.func.isRequired
}

export default Menu
