import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'

const PrimeButton = ({ icon, text, onClick }) => {
  return (
    <Fragment>
        <button className='prime-color' onClick={onClick}>
            <FontAwesomeIcon icon={icon}/>
            {text}
        </button>
    </Fragment>
  )
}

export default React.memo(PrimeButton)