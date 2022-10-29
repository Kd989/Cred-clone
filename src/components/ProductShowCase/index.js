import React, { useEffect, useRef, useState } from 'react'
import "./productShowcase.css"
import newCenter from "../ProductShowCase/new-center.png"
import newLeft1 from "../ProductShowCase/new-left-1.png"
import newLeft2 from "../ProductShowCase/new-left-2.png"
import newright1 from "../ProductShowCase/new-right-1.png"
import newright2 from "../ProductShowCase/new-right-2.png"

const ProductShowcase = () => {
    const [showAnimation, setShowAnimation] = useState(false)


    const ref = useRef(null)


    const toggleAnimation = (e) => {
        if (e[0]?.isIntersecting)
            setShowAnimation(true)
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options)
        if (!showAnimation) {
            if (ref.current) {
                observer.observe(ref.current)
            }
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    })
    return (
        <div className={`product-showcase  ${showAnimation ? "scale-in-bottom" : ""}`}
            ref={ref}>
            <div className='showcase-wrapper'>
                <img src={newLeft2} alt="sorry" className='showcase-ui showcase-mockup-1' />
                <img src={newCenter} alt="sorry" className='showcase-ui showcase-mockup-2' />
                <img src={newLeft1} alt="sorry" className='showcase-ui showcase-mockup-3' />
                <img src={newright1} alt="sorry" className='showcase-ui showcase-mockup-4' />
                <img src={newright2} alt="sorry" className='showcase-ui showcase-mockup-5' />

            </div>
          
        </div>
    )
}

export default ProductShowcase
