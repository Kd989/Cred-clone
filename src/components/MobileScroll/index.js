import React, { useState } from 'react'
import "./MobileScroll.css"
import ScreenText from './ScreenText'


const scrollData = [
    {
        heading: "we've got your back.",
        description: "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
        mobile_img: require("./neopop-fold1.webp")
    },
    {
        heading: "begin your winning streak.",
        description: "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
        mobile_img: require("./neopop-fold2.webp")
    },
    {
        heading: "for your eclectic taste.",
        description: "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
        mobile_img: require("./neopop-fold3.webp")
    },
    {
        heading: "more cash in your pockets.",
        description: "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
        mobile_img: require("./neopop-fold4.webp")
    }
]

const MobileScroll = () => {
    const [currentimg, setcurrentimg] =useState(0)
    
    return (
        <div className='max-width flex mobile-scroll'>
            <div className='scroll-full-screen-wrapper'>
                {scrollData.map((screen, index) => {
                return <div className='scroll-full-screen'>
                        <ScreenText screen={screen} index={index} setcurrentimg={setcurrentimg}/>
                         </div>
                })}
            </div>
            <div className='mobile-mockup-wrapper non-mobile'>
                <div className='mobile-mockup'>
                    <div className='mobile-mockup-screen flex absolute-center'>
                        <img 
                        src={scrollData[currentimg].mobile_img} 
                        className='mobile-screen-img slide-in-right' 
                        key={scrollData[currentimg].mobile_img}
                        alt="sorry"
                        />
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileScroll
