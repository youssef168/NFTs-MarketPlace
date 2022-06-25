import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlackBtn = ({ icon, text }) => {
  return (
    <Fragment>
        <button className='black-btn'>
            <FontAwesomeIcon icon={icon}/>
            { text }
        </button>
    </Fragment>
  )
}

export default React.memo(BlackBtn)