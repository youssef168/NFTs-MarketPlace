import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'


const StepCard = () => {
  return (
    <Fragment>
        <div className="col-sm-12 col-lg-3 col-md-6">
            <div className="step-card">
                <div className="step-icon">
                    <FontAwesomeIcon icon={faWallet}/>
                </div>
                <div className="step-body">
                    <div className="step-head">
                        <h3>Setup Your Wallet</h3>
                    </div>
                    <div className="step-content">
                        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum</h5>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default React.memo(StepCard)