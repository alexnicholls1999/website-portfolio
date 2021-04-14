import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'



function MailToButton({mailto}) {

    const handleContactClick = (e) => {
        window.location = mailto;
        e.preventDefault();
    }

    return (
        <Button onClick={handleContactClick} text="Contact"/>
    )
}

export default MailToButton
