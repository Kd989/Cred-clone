import React, { useEffect, useRef, useState } from 'react'
// import "../MobileScroll/MobileScroll.css"

const ScreenText = ({ screen, setcurrentimg, index }) => {
    const [showAnimation, setShowAnimation] = useState(false)


   
   var ref = useRef(null)

    const toggleAnimation = (e) => {
        if (e[0]?.isIntersecting)
            setShowAnimation(true)
        setcurrentimg(index)
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
    }

    useEffect(() => {
      
        const observer = new IntersectionObserver(toggleAnimation, options)

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            
           if (ref.current) {
               observer.unobserve(ref.current)   
            }
        } 
    }, [ref, options]) 


    return (
        <div className={`screen-text ${showAnimation ? 'text-visible' : ""}`} ref={ref}>
            <div className='screen-heading'>
                {screen.heading}
            </div>
            <div className='mobile-mockup-wrapper only-mobile'>
                <div className='mobile-mockup'>
                    <div className='mobile-mockup-screen flex absolute-center'>
                        <img src={screen.mobile_img} className='mobile-screen-img' alt='sorry' />
                    </div>
                </div>
            </div>
            <div className='screen-description'>
                {screen.description}
            </div>

        </div>

    )
}

export default ScreenText;
