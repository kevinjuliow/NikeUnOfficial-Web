import React from 'react'
import {Navigation , Pagination , Autoplay} from 'swiper'
import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import  {Products} from '../../Products'
import './Swiper.css'
import { useHref } from 'react-router-dom'

function Slides() {

  return (
    <Swiper
      modules={[Navigation , Pagination ,Autoplay]}
      spaceBetween ={50}
      slidesPerView = {1}
      navigation
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlidChange = {()=> console.log('Slide Change')}
      onSwiper = {(swiper) => console.log(swiper)}  
      >
    {Products.map((e)=>{
      return <SwiperSlide key={e.id}>
        <img src={e.image} alt="" />
        <div>
          <h5 style={{fontSize:'5px'}}>{e.name}</h5>
        </div>
      </SwiperSlide>
    })}
        
    </Swiper>
  )
}

export default Slides