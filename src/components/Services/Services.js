import React from 'react';
import Card from 'react-bootstrap/Card';
import target from './target.png';
import solutions from './solutions.jpeg';
import budget from './budget.jpg';
import consult from './consultation.jpg'
import './Services.css';

const Services = () => {
  return (
    <>
      <div className='services-content'>

        <div className="card-div">
         
            <Card className='card'>

              <Card.Img className='card-img' variant="top" style={{ width: '20rem', }} src={target} />

              <Card.Body className='card-body'>

                <Card.Title className='card-head cent'>1. Dynamic Advertising</Card.Title>

                <p className='srvc-details cen'>Tired of the same old advertising routine? We've got a fresh idea! Imagine your brand splashed across reusable shopping bags, turning every grocery run into a mini-marketing mission. Learn more about how we can transform these everyday bags into powerful mobile billboards that grab attention and get your message directly to your target audience.</p>

              </Card.Body>

            </Card>

        </div>
        <div className="card-div">
         
            <Card className='card'>

              <Card.Img className='card-img' variant="top" style={{ width: '20rem', }} src={solutions} />

              <Card.Body className='card-body'>

                <Card.Title className='card-head cent'>2. Custom Solutions</Card.Title>

                <p className='srvc-details cen'>We know every brand is unique, and your advertising should be too! That's why we don't offer a one-size-fits-all solution. Whether you're a marketing giant, a local favorite, a budding startup, or a school event, we can tailor our shopping bag billboard strategy to your specific needs and goals. Let's chat about how to make your brand the star of the shopping scene! We'll turn heads and turn shoppers into fans.</p>

              </Card.Body>

            </Card>

        </div>
        <div className="card-div">
         
            <Card className='card'>

              <Card.Img className='card-img' variant="top" style={{ width: '20rem', }} src={budget} />

              <Card.Body className='card-body'>

                <Card.Title className='card-head cent'>3. Budget-Friendly Packages</Card.Title>

                <p className='srvc-details cen'>Big impact doesn't have to mean a big budget. We get it, marketing dollars are precious! That's why we offer creative and cost-effective solutions that get you maximum results without breaking the bank. Whether you're just starting out or looking to stretch your marketing budget further, we have solutions that fit your budget.</p>

              </Card.Body>

            </Card>

        </div>
        <div className="card-div">
         
            <Card className='card'>

              <Card.Img className='card-img' variant="top" style={{ width: '20rem', }} src={consult} />

              <Card.Body className='card-body'>

                <Card.Title className='card-head cent'>4. Consultation:</Card.Title>

                <p className='srvc-details cen'>Ready to ditch the boring ads and take your brand awareness to the next level? Schedule a free consultation with our friendly team! We'll chat about your marketing goals and explore how our shopping bag billboard strategy can help you achieve them. From eye-catching ad design to seamless bag distribution, we're here to support you every step of the way. Let's get your brand noticed and talked about!</p>

              </Card.Body>

            </Card>

        </div>

      </div>


    </>
  )
}

export default Services