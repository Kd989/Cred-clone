import React from 'react'
import Button from '../common/Button'
import "./AppRating.css"
const getiosPrefix = () => {
    return <img src='https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png' className='app-rating-icon' alt='sorry'/>
}
const getandroidPrefix = () => {
    return <img src='https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png' className='app-rating-icon'  alt='sorry'/>
}
const AppRating = () => {
    return (
        <div className='max-width flex app-rating'>
            <div className='app-rating-block flex flex-col'>
                <div className='flex'>
                    <div className='app-rating-value flex flex-col'>4.8
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png' alt='sorry' className='app-rating-stars' />
                    </div>
                    <div className='app-rating-platform'>
                    app <br />store
                </div>
                </div>
               
                <div className='non-mobile'>
                    <Button buttonText="Download the app" customClass="app-rating-button" prefix={getiosPrefix()} 
                    />
                </div>
            </div>
            <div className='app-rating-block flex flex-col'>
                <div className='flex'>
                    <div className='app-rating-value flex flex-col'>4.7
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png' alt='sorry' className='app-rating-stars' />
                    </div>
                <div className='app-rating-platform'>
                    play <br />store
                </div>
                </div>
                <div className='non-mobile'>
                    <Button buttonText="Download the app" customClass=" app-rating-button" prefix={getandroidPrefix()} 
                    />
                </div>
            </div>
            <div className='only-mobile'>
                    <Button buttonText="Download the app"/>
            </div>
        </div>
    )
}

export default AppRating
