import React, { Fragment, lazy, Suspense } from 'react'
import { faRocket, faPlus, } from '@fortawesome/free-solid-svg-icons'
import '../SASS/compiled.css'
import NFTImge from '../Assets/NFT-Img1.jpg'
import LazyLoad from 'react-lazyload'
const BlackBtn = lazy(() => import('../components/BlackBtn'))
const Section = lazy(() => import('../components/Section'))
const StepCard = lazy(() => import('../components/StepCard'))
const NFTCard = lazy(() => import('../components/NFTCard'))
const SallerCard = lazy(() => import('../components/SallerCard'))

const Home = () => {
  return (
    <Fragment>
        <div className="hero">
            <div className="container">
                <div className="row sm-center">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="text">
                            <h2>
                                Discover Rare Digital Art And Collect <span>Sell extraordinary</span> NFTs
                            </h2>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti excepturi omnis neque adipisci sequi ullam unde in minus quis quos.</h5>
                            <div className="btns-group d-flex align-items-center gap-4">
                                <BlackBtn icon={faRocket} text="Explor"/>
                                <BlackBtn icon={faPlus} text="Create"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="img-cover">
                            <LazyLoad>
                                <img src={NFTImge} alt="" />
                            </LazyLoad>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-log-12 mb-4">
                        <div className='auction-bar d-flex align-items-center justify-content-between'>
                            <h4>Live Auction</h4>
                            <h5 className='text-decorated-underline'>Explor More</h5>
                        </div>
                     </div>
                    <Suspense fallback={<h1>Loading</h1>}>
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                    </Suspense>
                </div>
            </div>
        </Section>

        <Section>
            <div className="container">
                <div className="row">
                    <div className="col-log-12 mb-4">
                        <div className="d-flex">
                            <h4 className='text-decorated-underline'>Top Seller</h4>
                        </div>
                    </div>
                    <Suspense fallback={<h1>Loading</h1>}>
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                        <SallerCard />
                    </Suspense>
                </div>
            </div>
        </Section>

        <Section>
        <div className="container">
            <div className="row">
                <div className="col-log-12 mb-4">
                    <div className="d-flex">
                        <h4 className='text-decorated-underline'>Trending</h4>
                    </div>
                </div>
                <Suspense fallback={<h1>Loading</h1>}>
                    <NFTCard />
                    <NFTCard />
                    <NFTCard />
                    <NFTCard />
                </Suspense>
            </div>
        </div>
        </Section>

        <Section>
        <div className="container mt-1">
            <div className="row">
                <div className="col-log-12 mb-4">
                    <div className="d-flex">
                        <h4>Create and sell your NFTs</h4>
                    </div>
                </div>
                <StepCard />
                <StepCard />
                <StepCard />
                <StepCard />
            </div>
        </div>
        </Section>
    </Fragment>
  )
}

export default Home