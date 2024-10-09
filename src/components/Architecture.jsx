import React, { useState,lazy } from 'react'
// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Keyboard, Navigation,Pagination } from "swiper/modules";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { LazyMotion,domMax,m } from 'framer-motion'
import Header, { HamburgerMenu, HeaderNav } from '../components/Header/Header'
const SearchBar = React.lazy(() => import("../components/Header/Header").then((module) => ({ default: module.SearchBar })))
import ReactCustomScrollbar from '../components/ReactCustomScrollbar'
const Menu = React.lazy(() => import("../components/Header/Header").then((module) => ({ default: module.Menu })))
const SocialIcons = lazy(() => import("../components/SocialIcon/SocialIcons"))
// import SocialIcons from '../components/SocialIcon/SocialIcons'
import Buttons from '../components/Button/Buttons'
import Clients from '../components/Clients/Clients'
import Overlap from '../components/Overlap/Overlap'
import CustomModal from '../components/CustomModal'
// import BlogMetro from '../components/Blogs/BlogMetro'
import InteractiveBanners15 from '../components/InteractiveBanners/InteractiveBanners15'
import { fadeIn, zoomIn } from '../Functions/GlobalAnimations'
import { blogData } from '../components/Blogs/BlogData';
import { InteractiveBannersData15 } from '../components/InteractiveBanners/InteractiveBannersData';





// Filter the blog data category wise
const blogMetroData = blogData.filter((item) => item.blogType === "metro").filter(item => item.category.includes("architecture"));

const ArchitecturePage = (props) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperRef1 = React.useRef(null);
    const swiperData = [
        {
            img: "/assets/img/home-startup-slider-bg-01.webp",
            title: "Start your online business today",
            subTitle: "fwafwaf"
        },
        {
            img: "/assets/img/home-startup-slider-bg-01.webp",
            title: "Combine thinking and technical",
            subTitle: "gwgagedsf"
        },
        {
            img: "/assets/img/home-startup-slider-bg-01.webp",
            title: "Delivering creative digital products",
            subTitle: "2412rfe"
        },
    ]
    const SocialIconsData = [
      {
        color: "#3b5998",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
      },
      {
        color: "#ea4c89",
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble"
      },
      {
        color: "#00aced",
        link: "https://twitter.com/",
        icon: "fab fa-twitter"
      },
      {
        color: "#fe1f49",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
      },
      {
        color: "#0077b5",
        link: "https://www.linkedin.com/",
        icon: "fab fa-linkedin-in"
      },
    ]

     
     
  return (
    <div style={props.style}>
        <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav fluid="fluid" theme="dark" expand="lg" className="py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0">
          <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0">
            <a aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" src='/assets/img/webp/logo-green-dark.webp' data-rjs='/assets/img/webp/logo-green-dark@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" src='/assets/img/webp/logo-green-dark.webp' data-rjs='/assets/img/webp/logo-green-dark@2x.webp' alt='logo' />
              </Navbar.Brand>
            </a>
          </Col>
          <Navbar.Toggle className="order-last md:ml-[17px] w-[25px] min-h-[15px] inline-block align-middle">
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-center col-auto col-lg-8">
            <Menu {...props} />
          </Navbar.Collapse>
          <Col lg={2} xs={"auto"} className="justify-end pe-0 flex items-center">
            <SearchBar />
            <div className="md:hidden pl-[17px]">
             
            </div>
          </Col>
        </HeaderNav>
      </Header>
      <section className="relative">
        <button
          aria-label="swiper next button"
          onClick={() => swiperRef1.current.swiper.slidePrev()}
          className="swiper-button-prev absolute top-[48%] z-[2] left-[40px] text-[40px] text-white w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer after:hidden hover:opacity-50 transition-default"
        >
          <i className="line-icon-Arrow-OutLeft text-[40px]"></i>
        </button>
        <button
          aria-label="swiper prev button"
          onClick={() => swiperRef1.current.swiper.slideNext()}
          className="swiper-button-next absolute top-[48%] z-[2] right-[40px] text-[40px] text-white w-[50px] leading-[50px] flex justify-center items-center  right-inherit cursor-pointer after:hidden hover:opacity-50 transition-default"
        >
          <i className="line-icon-Arrow-OutRight text-[40px]"></i>
        </button>
        <Swiper
          pagination={{ clickable: true }}
          keyboard={true}
          ref={swiperRef1}
          loop={true}
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="full-screen landscape:md:h-[600px] swiper-pagination-02 interior-design-swiper swiper-pagination-light swiper-pagination-medium white-move swiper-default-nav-hidden"
        >
          <SwiperSlide
            className="relative overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://via.placeholder.com/1920x1080)",
            }}
          >
            <div className="flex flex-col justify-end ml-auto w-[600px] h-full xl:w-[550px] sm:w-full">
              <div className="bg-white py-28 px-32 xl:py-20 xl:px-24 xs:p-10">
                <Col className="p-0 mb-[25px] md:inline-block items-center justify-center">
                  <span className="font-serif text-basecolor inline-block font-medium align-middle">
                    01
                  </span>
                  <span className="w-[35px] h-[1px] inline-block align-middle bg-mediumgray ml-[22px] mr-[15px] "></span>
                  <span className="inline-block font-serif text-basecolor uppercase font-medium align-middle">
                    Resident interior
                  </span>
                </Col>
                <Col className="col-12 p-0 font-serif justify-center mb-[10px]">
                  <div className="flex">
                    <h2 className="heading-3 m-0 self-center text-darkgray uppercase font-bold -tracking-[2px] w-[80%]">
                      Concrete pent house
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
          <SwiperSlide
            className="relative overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://via.placeholder.com/1920x1080)",
            }}
          >
            <div className="flex flex-col justify-end ml-auto w-[600px] h-full xl:w-[550px] sm:w-full">
              <div className="bg-white py-28 px-32 xl:py-20 xl:px-24 xs:p-10">
                <Col className="p-0 mb-[25px] md:inline-block items-center justify-center">
                  <span className="font-serif text-basecolor inline-block font-medium align-middle">
                    02
                  </span>
                  <span className="w-[35px] h-[1px] inline-block align-middle bg-mediumgray ml-[22px] mr-[15px] "></span>
                  <span className="inline-block font-serif text-basecolor uppercase font-medium align-middle">
                    Product design
                  </span>
                </Col>
                <Col className="col-12 p-0 font-serif justify-center mb-[10px]">
                  <div className="flex">
                    <h2 className="heading-3 m-0 self-center text-darkgray uppercase font-bold -tracking-[2px] w-[80%]">
                      Modernism table pots
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
          <SwiperSlide
            className="relative overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://via.placeholder.com/1920x1080)",
            }}
          >
            <div className="flex flex-col justify-end ml-auto w-[600px] h-full xl:w-[550px] sm:w-full">
              <div className="bg-white py-28 px-32 xl:py-20 xl:px-24 xs:p-10">
                <Col className="p-0 mb-[25px] md:inline-block items-center justify-center">
                  <span className="font-serif text-basecolor inline-block font-medium align-middle">
                    03
                  </span>
                  <span className="w-[35px] h-[1px] inline-block align-middle bg-mediumgray ml-[22px] mr-[15px] "></span>
                  <span className="inline-block font-serif text-basecolor uppercase font-medium align-middle">
                    Resident interior
                  </span>
                </Col>
                <Col className="col-12 p-0 font-serif justify-center mb-[10px]">
                  <div className="flex">
                    <h2 className="heading-3 m-0 self-center text-darkgray uppercase font-bold -tracking-[2px] w-[80%]">
                      Comfort seating
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
        </Swiper>
      </section>
{/* 
      <div className="px-[90px] bg-[#23262d] overflow-hidden xl:px-[45px] lg:px-0">
       
      
        <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:pt-[0px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row className="items-center justify-center md:items-start sm:text-center">
              <Col lg={4} md={6} className="md:mb-[50px]">
                <m.div className="inline-block text-center w-[300px] py-14 px-[15px] relative xs:p-[30px] xs:w-[315px]" {...{ transition: { delay: 0.2 } }}>
                  <div className="border-r-0 border-solid	border-[10px] border-[#ffffff1a] h-full w-[67px] block absolute bottom-0 left-0 xs:left-[25px]"></div>
                  <h1 className="text-[80px] leading-[72px] mb-0 mr-[15px] font-semibold tracking-[-5px] text-basecolor font-serif inline-block align-middle">28</h1>
                  <div className="w-[40%] leading-[24px] text-white text-xmd font-serif text-left relative inline-block align-middle lg:w-[50%] sm:w-[35%]">Years experience working</div>
                  <div className="border-l-0 border-solid	border-[10px] border-[#ffffff1a] h-full w-[67px] block absolute bottom-0 right-0 xs:right-[25px]"></div>
                </m.div>
              </Col>
              <m.div className="col-lg-3 col-md-4 text-left sm:text-center" {...{  transition: { delay: 0.4 } }}>
                <span className="mb-[20px] text-[15px] font-serif uppercase block">Since 1992</span>
                <span className="w-[85%] leading-[34px] font-medium text-white text-xlg font-serif block md:text-lg sm:w-full sm:mb-[15px]">An architectural company based in United kingdom</span>
              </m.div>
              <m.div className="col-lg-5 col-md-10 text-left sm:text-center" {...{  transition: { delay: 0.5 } }}>
                <p className="w-[85%] mb-[20px] block sm:w-full">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been standard dummy text ever since ipsum been the industry lorem ipsum has been lorem ipsums dolor.</p>
                <Buttons ariaLabel="link for About company" to="/page/about-us" className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] sm:mb-0 after:bg-spanishgray hover:text-spanishgray" color="#939393" size="xlg" title="About company" />
              </m.div>
            </Row>
          </Container>
        </section>
      
       
      
      
      
        
     
       
       
      </div> */}
    </div>
  )
}

export default ArchitecturePage