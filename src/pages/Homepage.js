import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/common/Header/index'
import ProductShowcase from '../components/ProductShowCase/index'
import FeelSpecial from '../components/FeelSpecial'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'
import BrandsLove from '../components/BrandsLove'
import WindowPeak from '../components/WindowPeak'
import MobileScroll from '../components/MobileScroll'
import CredStory from '../components/CredStory'
import AppRating from '../components/AppRating'
import Footer from '../components/common/Footer'

const HomePage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ProductShowcase/>
    <FeelSpecial/>
    <BrandsLove/>
    <CredExperience/>
    <MobileScroll/>
    <div className='non-mobile'>
    <WindowPeak />

    </div>
    <CredSecurity/>
    <CredStory/>
    <AppRating/>
    <Footer/>
    </>

  )
}

export default HomePage
