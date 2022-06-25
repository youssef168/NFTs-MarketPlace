import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-black mt-5">
        <div className="container">
            <div className="row">
                <div className="mb-3 col-md-6 col-sm-6 col-lg-3">
                  <Logo />
                  <h5 className='p-head'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod repellat! Quis quos dolorum tenetur fuga? Aspernatur rerum quae amet.</h5>
                </div>
                <div className="mb-3 col-md-6 col-sm-6 col-lg-3">
                  <h5 className='footer-head'>Account</h5>
                  <ul className="footer-list list-group">
                    <li className='footer-item list-group-item'>Author Profile</li>
                    <li className='footer-item list-group-item'>Create Item</li>
                    <li className='footer-item list-group-item'>Collection</li>
                    <li className='footer-item list-group-item'>Edit Profile</li>
                  </ul>
                </div>
                
                <div className="mb-3 col-md-6 col-sm-6 col-lg-3">
                  <h5 className='footer-head'>Resources</h5>
                  <ul className="footer-list list-group">
                    <li className='footer-item list-group-item'>Help Center</li>
                    <li className='footer-item list-group-item'>Partner</li>
                    <li className='footer-item list-group-item'>Community</li>
                    <li className='footer-item list-group-item'>Activity</li>
                  </ul>
                </div>

                <div className="mb-3 col-md-6 col-sm-6 col-lg-3">
                  <h5 className='footer-head'>Company</h5>
                  <ul className="footer-list list-group">
                    <li className='footer-item list-group-item'>About</li>
                    <li className='footer-item list-group-item'>Career</li>
                    <li className='footer-item list-group-item'>Ranking</li>
                    <li className='footer-item list-group-item'>Contact Us</li>
                  </ul>
                </div>
                
                <div className="mb-3 col-lg-12 align-items-center">
                  <h5 className='footer-head text-center'>News Latter</h5>
                  <input type="email" placeholder='Email'className='newslatter-input'/>
                  <div className="footer-socials">
                      <div className="socials-item">
                        <i class="ri-facebook-circle-fill"></i>
                      </div>
                      <div className="socials-item">
                        <i class="ri-instagram-line"></i>
                      </div>
                      <div className="socials-item">
                       <i class="ri-twitter-line"></i>
                      </div>
                      <div className="socials-item">
                        <i class="ri-telegram-line"></i>
                      </div>
                      <div className="socials-item">
                        <i class="ri-discord-line"></i>
                      </div>
                  </div>
                </div>
                <div className="mt-5 mb-0 col-lg-12 align-items-center">
                    <h5 className="copyright">Copyrights 2022, Developed by Youssef Ayman. @alphadev's All Rights Reserved.</h5>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default React.memo(Footer) 