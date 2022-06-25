import React, { Fragment, useState } from 'react'
import LazyLoad from 'react-lazyload'
import NFTCreator from '../Assets/NFT-Creator1.png'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'
import PrimeButton from './PrimeButton'

const NFTCard = () => {
    const [modalState, setModalState] = useState(false)
  return (
    <Fragment>
    <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <div className="nft-card">
            <div className="img">
                <LazyLoad>
                    <img src={require("../Assets/CAT-NFT.jpg")} alt="" />
                </LazyLoad>
            </div>
            <div className="nft-card-body">
            <div className="nft-card-title">
                <h4>Travel Monkey Club</h4>
            </div>
            <div className="nft-card-info d-flex align-items-center justify-content-between">
                <div className="nft-creator d-flex">
                    <div className="nft-card-img">
                        <img src={NFTCreator} alt="" />
                    </div>
                    <div className='nft-creator-info'>
                        <h6>Created By</h6>
                        <p>Trista Francis</p>
                    </div>
                </div>
                <div className="nft-price">
                    <h6>Current Bid</h6>
                    <h5>5.89 ETH</h5>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <PrimeButton icon={faBagShopping} text="Place Bid" onClick={() => setModalState(true)}/>
                {modalState && <Modal setModalState={setModalState}/>}
                <h6 className="history">View History</h6>
            </div>

        </div>
      </div>
    </div>

    </Fragment>
  )
}

export default React.memo(NFTCard)