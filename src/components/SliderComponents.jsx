import { Autoplay, EffectFade, Keyboard, Navigation,Pagination } from "swiper/modules";
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState,lazy } from 'react'

const SwiperData = [
    {
      img: "/assets/img/slider/slider.jpg",
      title: "We have been signage company since 2003",
      subtitle: "We have been signage company since 2003",
    },
    {
      img: "/assets/img/slider/slider1.jpg",
      title: "Start your online business today",
      subtitle: "Personalized services All Your Signage need",
    },
    {
      img: "/assets/img/marriott.jpg",
      title: "The best way to promote business",
      subtitle: "Delivering beautiful digital products",
    },
  ]
  
  

const HomeBusinessPage = () => {

    return (
      <section className="relative h-screen md:h-[600px] sm:h-[500px]">
      <Swiper
      className="h-full relative"
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ dynamicBullets: false, clickable: true }}
    >
      {SwiperData.map((item, i) => (
        <SwiperSlide
        className="relative overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <div className="flex flex-col justify-end ml-auto w-[600px] h-full xl:w-[550px] sm:w-full">
          <div className="bg-white py-28 px-32 xl:py-20 xl:px-24 xs:p-10">
            <Col className="p-0 mb-[25px] md:inline-block items-center justify-center">
              <span className="font-serif text-basecolor inline-block font-medium align-middle">
                01
              </span>
              <span className="w-[35px] h-[1px] inline-block align-middle bg-mediumgray ml-[22px] mr-[15px] "></span>
              <span className="inline-block font-serif text-basecolor uppercase font-medium align-middle">
               {item.title}
              </span>
            </Col>
            <Col className="col-12 p-0 font-serif justify-center mb-[10px]">
              <div className="flex">
                <h2 className="heading-3 m-0 self-center text-black uppercase font-bold -tracking-[2px] w-[80%]">
                  {item.subtitle}
                </h2>
                <span className="self-center text-center ml-[30px]">
                  <a
                    aria-label="demo"
                    to="#"
                    className="inline-block leading-[65px] rounded-full bg-darkgray w-[60px] h-[60px]"
                  >
                    <i className="feather-arrow-right text-xlg text-white"></i>
                  </a>
                </span>
              </div>
            </Col>
          </div>
        </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
    </section>


  )
}

export default HomeBusinessPage
