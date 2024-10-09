import { Autoplay, EffectFade, Keyboard, Navigation,Pagination } from "swiper/modules";
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState,lazy } from 'react'
import { motion} from 'framer-motion'

const SwiperData = [
    {
      img: "/assets/img/webp/accounting.webp",
      title: "VAT and TAX Service in U.A.E",
      subtitle: "Delivering beautiful digital products",
    },
    {
      img: "/assets/img/webp/account1.webp",
      title: "Start your online business today",
      subtitle: "Delivering beautiful digital products",
    },
    {
      img: "/assets/img/webp/audit.jpg",
      title: "The best way to promote business",
      subtitle: "Delivering beautiful digital products",
    },
  ]
  
  const HomeBusinessPage = () => {

  const [activeSlide, setActiveSlide] = useState(0)
      return (
        <section className= "relative h-screen md:h-[600px] sm:h-[500px">
    
      <Swiper
        // className="startup swiper-navigation-04 swiper-navigation-light swiper-pagination-03 swiper-pagination-light swiper-pagination-medium sm-nav-hidden"
        modules={[Pagination, Autoplay]}
        effect="fade"
        slidesPerView={0}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 10500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", 
        }}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore;
          setActiveSlide(realIndex)
      }}
      breakpoints={{ 991: { pagination: false } }}
     >
      
        {SwiperData.map((item, i) => (
          <SwiperSlide key={i} className="overflow-hidden">
          <motion.div initial={{ scale: 1.2 }} animate={{ scale: activeSlide === i ? 1 : 1.2 }} transition={{ duration: 1.7, ease: "easeInOut" }} style={{ backgroundImage: `url(${item.img})` }} className="relative overflow-hidden bg-center bg-cover"> </motion.div>
          <motion.div className="opacity-50 absolute h-full w-full top-0 left-0 bg-darkgray"></motion.div>
          <Container className="text-center">
              <Row className="full-screen items-center justify-center md:landscape:h-[500px]">
                  <Col xs={12} lg={7} md={10} className="justify-center items-center my-0 mx-auto relative flex flex-col">
                      <motion.h2 initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} animate={{ clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }} className="text-red-900">{item.title}</motion.h2>
                      <motion.span initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} animate={{ clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} transition={{ duration: 0.5, delay: 0.8, ease: "easeIn" }} className="font-serif block text-[19px] leading-[28px] mb-[35px] font-light text-white xs:text-base xs:mb-[20px]">{item.subtitle}</motion.span>
                      <motion.div initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} animate={{ clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} transition={{ duration: 0.5, delay: 0.9, ease: "easeIn" }}>
                          <a aria-label="started now" to="/page/contact-classic" className="uppercase startup-link font-medium m-8">
                              Get started now
                              <div>
                                  <i className="fas fa-play"></i>
                              </div>
                          </a>
                      <div className="custom-pagination"></div>
                      </motion.div>
                     </Col>
                </Row>
          </Container>
    </SwiperSlide>
    ))}
  </Swiper>

</section>




 )
  }
export default HomeBusinessPage
