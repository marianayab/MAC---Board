import React from 'react';
import './About.css';
import target from './illustration/target.png';
import budget from './illustration/budget.png';
import bags from './illustration/bags.png'
import partner from './illustration/partnership.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <>
            <Header />
            <div className="about-content">

                <div className="about-text">

                    <h1 className='about-us'>About us</h1>

                    <p className='about-para'>Imagine a world where every shopping trip is a powerful brand experience.We revolutionize traditional advertising by transforming shopping bags into dynamic mobile billboards. Partnering with local shopkeepers, we offer a compelling way for businesses of all sizes to reach their target audience offline. Our innovative approach turns everyday errands into impactful brand interactions, with each reusable bag serving as a moving advertisement that captures attention and drives brand awareness. We seamlessly integrate your message into the fabric of daily life, empowering you to connect with local consumers effortlessly. This targeted approach goes beyond traditional marketing, offering maximum exposure at a fraction of the cost.

                        <p className='ready'>
                            Ready to join the shopping bag billboard revolution? Contact us today to discuss partnership opportunities.</p>

                    </p>

                    <button className="submit-btn-fo">Contact</button>

                </div>




                <div className='value'>

                    <h1 className='value-head'>Unlocking Value with MAD Board</h1>

                    <div className='symbol'>

                        <div className='target space'>

                            <h3>Targeted Ads</h3>

                            <img src={target} alt='icon' style={{ width: '100px' }} />

                            <p className='value-para'>Maximum Impact | Our Advertising Approach Say goodbye to generic advertising! Our approach ensures that your message reaches the right audience at the right time massively. No more wasted efforts – just maximum impact.</p>
                        </div>

                        <div className='target space'>

                            <h3>Big Results, Small Investment</h3>

                            <img src={budget} alt='icon' style={{ width: '100px' }} />

                            <p className='value-para'>"Maximize your impact without maxing out your budget. We're all about delivering big results for small wallets. That's why we offer wallet-friendly options that pack a powerful punch."</p>

                        </div>

                        <div className='target space'>

                            <h3>Strategic Partnerships</h3>

                            <img src={partner} alt='icon' style={{ width: '100px' }} />

                            <p className='value-para'>Find out how partnering with local businesses can amplify your brand's presence in the community. Explore the benefits of collaborating with us to create memorable brand experiences for your customers.</p>

                        </div>

                        <div className='target space'>

                            <h3>Bag Bonds</h3>

                            <img src={bags} alt='icon' style={{ width: '100px' }} />

                            <p className='value-para'>Strengthening Partnerships, Reducing Costs We're committed to mutual benefits. That's why we provide shopkeepers with complimentary shopping bags, cutting expenses while nurturing our connection.</p>

                        </div>

                    </div>

                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default About
