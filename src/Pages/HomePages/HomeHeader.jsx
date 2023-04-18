import React from 'react'
import {Navigation , Pagination , Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import './Home.css'

function HomeHeader() {
  return (
    <Swiper className='HomeHeader'
    modules={[Navigation , Pagination , Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    loop ={true}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false,
    }}>
     <SwiperSlide><b>Hello Nike App </b> 
      <p>Download The App To Access Everything Nike , Get Your Great</p>
      </SwiperSlide>
     <SwiperSlide><b>Free Delivery</b> 
      <p>Apply to Order of $400 or more</p>
      </SwiperSlide>
     <SwiperSlide><b>New Styles On Sale Up to 40% </b> 
      <p>Shop All Our New Markdowns</p>
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeHeader