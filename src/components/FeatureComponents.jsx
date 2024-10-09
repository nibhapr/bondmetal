
import React, { lazy } from "react";
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import { fadeIn } from '../Functions/GlobalAnimations';

const IconWithText = lazy(() => import('../components/IconWithText/IconWithText'))
import Buttons from '../components/Button/Buttons'
// const IconWithText = lazy(() => import('../../Components/IconWithText/IconWithText'))


  
const FeatureComponets = () => {

    return (

<section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] ">
 
<Container>
  <Row className="justify-center">
    <motion.div className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24">
      <div className="mb-[20px] md:text-center sm:mb-[10px]">
        <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">About company</span>
      </div>
      <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">Experienced Sign and Graphic Professionals</h3>
      <div className=" mx-auto mx-lg-0">
        <Buttons href="/" className="font-medium font-serif uppercase bg-[#434242] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title="Discover BondSign" />
      </div>
    </motion.div>
    <Col xl={{ span: 7, offset: 2 }} lg={8}>
      <IconWithText grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]" theme="icon-with-text-01"   />
    </Col>
  </Row>
</Container>
</section>

    )
}

export default FeatureComponets