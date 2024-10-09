
import React, { lazy } from 'react'

import { AnimatePresence, motion } from 'framer-motion';
import { Col, Container, Navbar, Row, Tab, Tabs } from "react-bootstrap";
const IconWithText = lazy(() => import('../components/IconWithText/IconWithText'))
const Overlap = lazy(() => import('../components/Overlap/Overlap'))
const TiltBox = lazy(() => import('../components/FancyText/FancyText').then(module => ({ default: module.TiltBox })))

import { fadeIn, fadeInLeft, fadeInRight, zoomIn } from '../Functions/GlobalAnimations';
const OverlapComponents = () => {
    
    const iconWithTextData = [
        {
          icon: "line-icon-Cursor-Click2 text-[#27ae60]",
          title: "Innovative business",
          content: "Easy to customize",
        },
        {
          icon: "line-icon-Bakelite text-[#27ae60]",
          title: "Expertly marketing",
          content: "High quality services",
        },
        {
          icon: "line-icon-Boy text-[#27ae60]",
          title: "Engaging audiences",
          content: "Build perfect websites",
        },
      ]
        return (


<section className="bg-cover bg-center pb-[200px] lg:pb-[160px] md:py-[110px] sm:py-[50px] startup-iconwithtext" style={{ backgroundImage: "url(assets/img/assets/img/home-startup-text-bg.webp)" }}>
<Container>
  <div className="mb-[105px] md:mb-[70px] sm:mb-[50px]">
  
    <Overlap className="md:mt-0">
      <Row className="justify-center">
        <Col xs={12} sm={9} lg={12} md={12} >
          <IconWithText grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center  gap-y-10 z-10 relative text-white" className="rounded-[4px] flex" theme="icon-with-text-04" data={iconWithTextData} />
        </Col>
      </Row>
    </Overlap>
  </div>
  <Row className="items-end overflow-hidden">
    <motion.div className="col-12 col-lg-3 col-md-6 order-1 text-right md:mb-[50px] md:text-center" {...fadeInRight}>
      <div className="text-[70px] text-red-800 font-serif leading-[70px] tracking-[-3px] font-semibold">1000+</div>
      <span className="font-serif text-red-800 font-medium uppercase tracking-[2px] block mb-[15px] sm:mb-[5px]">Happy customers</span>
      <p className="w-[90%] inline-block sm:w-[60%] xs:w-full">Lorem ipsum dolor sit consectetur do eiusmod tempor incididunt</p>
    </motion.div>
    <motion.div className="col col-lg-6 order-lg-2 order-3 z-0 py-[10px]" {...{ ...fadeIn, transition: { duration: 0.6 } }}>
      <TiltBox>
        <h1
          className="title cover-background inline-block font-serif mb-0 uppercase bg-darkgray font-semibold tracking-[-10px] text-[300px] lg:text-[300px] leading-[260px] xs:text-[160px] xs:leading-[150px]"
          style={{ backgroundImage: `url(assets/img/20years.jpeg` }}>
          20
        </h1>
        <span className="font-serif text-xlg text-darkgray tracking-[4px] font-semibold uppercase block xs:text-md">Years of experience</span>
      </TiltBox>
    </motion.div>
    <motion.div className="col-12 col-lg-3 col-md-6 order-2 md:mb-[50px] md:text-center" {...fadeInLeft}>
      <div className="text-[70px] text-red-800 font-serif leading-[70px] tracking-[-3px] font-semibold">200+</div>
      <span className="font-serif text-red-800 font-medium uppercase tracking-[2px] block mb-[15px] sm:mb-[5px]">High skilled people</span>
      <p className="w-[90%] inline-block sm:w-[60%] xs:w-full">Lorem ipsum dolor sit consectetur do eiusmod tempor incididunt</p>
    </motion.div>
  </Row>
</Container>
</section>

)
}

export default OverlapComponents