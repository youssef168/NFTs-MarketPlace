import React, { Fragment } from 'react'
import LazyLoad from 'react-lazyload'
import SallerImg from '../Assets/NFT-Saller.png'

const SallerCard = () => {
  return (
    <Fragment>
        <div className="col-6 col-sm-3 col-lg-2 col-md-3 mb-3">
            <div className="saller-card">
                <div className="saller-img">
                    <LazyLoad>
                        <img src={SallerImg} alt="NFT-Saller"/>
                    </LazyLoad>
                </div>
                <div className="saller-info">
                    <h5>Ryan Carder</h5>
                    <h6>5.89 ETH</h6>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default React.memo(SallerCard)