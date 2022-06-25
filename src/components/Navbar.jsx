import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faWallet } from '@fortawesome/free-solid-svg-icons'
import BlackBtn from './BlackBtn'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='container'>
        <div className="nav-container">
            <Logo />
            <div className="center">
                <ul>
                    <li>Home</li>
                    <li>Market</li>
                    <li>Create</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="end">
                <BlackBtn icon={faWallet} text="Connect Wallet"/>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Navbar)
