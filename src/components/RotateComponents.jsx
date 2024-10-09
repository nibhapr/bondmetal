import { Row, Col, Container, Navbar } from "react-bootstrap";
import RotateBox from "../components/RotateBox/RotateBox";
import Overlap from "../components/Overlap/Overlap";
import {
    fadeIn,
    fadeInBlur,
    zoomIn,
    fadeInLeft,
    rotateInLeft,
  } from "../Functions/GlobalAnimations";

  const RotateBoxData = [
    {
      img: "/assets/img/bondsign.jpg",
      title: "Meditation",
      subtitle: "Felling good",
      icon: "line-icon-Flick",
      btnLink: "#",
      btnTitle: "Discover possible",
      content:
        "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim",
    },
    {
      img: "/assets/img/bondsign1.png",
      title: "Sound Therapy",
      subtitle: "Present moment",
      icon: "line-icon-Bell-2",
      btnLink: "#",
      btnTitle: "Discover possible",
      content:
        "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim",
    },
    {
      img: "/assets/img/bondsign2.jpg",
      title: "Mindfullness",
      subtitle: "Relaxing mind",
      icon: "line-icon-Sun",
      btnLink: "#",
      btnTitle: "Discover possible",
      content:
        "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim",
    },
  ];
const RotateComponets = () => {

    return (

<section>
<Container>
  <Row className="justify-center lg:mt-[200px] md:mt-0 m-8">
    <div className="col-12 col-md-12 col-sm-8 md:mt-0 md:py-[95px] sm:py-[80px] xs:pb-0">
      <RotateBox
        animation={rotateInLeft}
        animationDelay={0.4}
        grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center"
        data={RotateBoxData}
      />
    </div>
  </Row>
</Container>
</section>

    )}

export default RotateComponets