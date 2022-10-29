import React from 'react'
import Button from '../common/Button'
import "./heroSection.css"
import arrow from "../HeroSection/arrow.png"

const HeroSection = () => {
  
  return (
    <div className='hero-section-wrapper'>
      <div className='flex absolute-center hero-claim-label'>
        <div>
          pay credit card bill. earn guaranteed ₹200 back.
        </div>
        <div className='claim-anchor'>
          claim now  <img src= {arrow} alt="sorry" className='claim-arrow'/>
        </div>
      </div>

      <div className='flex absolute-center flex-col hero-section max-width'>
        <div className='hero-heading'>
          rewards for paying credit card bills
        </div>
        <div className='hero-subheading'>
          join 7.5m+ members who can rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED"/>
        
      </div>
    </div>
  )
}

export default HeroSection
