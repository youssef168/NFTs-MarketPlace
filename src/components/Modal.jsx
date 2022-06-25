import React, { Fragment } from 'react'
import { faBagShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PrimeButton from './PrimeButton'

const Modal = ({ setModalState }) => {
  return (
    <Fragment>
        <div className="modal-container">
            <div className="inner-modal">
                <div className="close-modal" onClick={() => setModalState(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
                <div className="inner-head">
                    <h3>Place A Bid</h3>
                    <h6>You must bid at least 5.89 ETH</h6>
                </div>
                <div className="inner-body">
                    <div className="input-body mb-4">
                        <input type="number" />
                    </div>
                    <div className="input-body mb-4">
                        <span className="label">Enter Quantity, 7 available</span>
                        <input type="number" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <p>You must bid at least</p>
                        <span>5.89 ETH</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <p>Service Fee</p>
                        <span>0.89 ETH</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <p>Total Bid Amount</p>
                        <span>5.89 ETH</span>
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <PrimeButton icon={faBagShopping} text="Place Bid"/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Modal