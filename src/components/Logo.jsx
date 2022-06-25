import React, { Fragment } from 'react'

const Logo = () => {
  return (
    <Fragment>
        <div className="logo">
            <h2 className='d-flex'>
                <i className="ri-fire-fill"></i>
                NFTs
            </h2>
        </div>
    </Fragment>
  )
}

export default React.memo(Logo)