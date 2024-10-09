


<section className="py-[130px] lg:py-[95px] md:py-[70px] sm:py-[50px] relative overflow-visible">
 <Container>
  <Row className="items-center">
    <m.div className="col-lg-6 relative mt-[70px] lg:mt-[30px] md:mb-[50px]" {...fadeIn}>
      <div className="relative">
        <Parallax className="lg-no-parallax w-[70%] rounded-[6px] lg:relative lg:!top-[-20px]" speed={0}>
          <div className="absolute top-0 left-0 w-full h-full rounded-[6px] opacity-50 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <img loading="lazy" src="https://via.placeholder.com/800x945" className="rounded-[6px] w-full" width="394.8" height="466.34" alt="our-process" />
        </Parallax>
        <Parallax className="lg-no-parallax flex rounded-[6px] justify-center items-center w-[70%] bg-no-repeat absolute bottom-0 right-[15px] lg:!top-[20px] lg:ml-auto" speed={20}>
          <img loading="lazy" src="https://via.placeholder.com/800x945" className="rounded-[6px]" width="394.8" height="466.34" alt="our-process" />
        </Parallax>
      </div>
    </m.div>
    <m.div className="col-lg-5 offset-lg-1" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
      <div className="font-serif text-xmd font-medium mb-[30px]">
        <span className="w-[50px] h-[1px] bg-fastblue inline-block align-middle mr-[20px]"></span>
        <span className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block">Looking for interface expertise?</span></div>
      <h5 className="font-serif text-darkgray font-medium mb-[30px] w-full">We design brand, digital experience that engaged the right customers</h5>
      <p className="w-[95%] mb-[35px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco.</p>
      <div className="xs:flex">
        <Buttons to="/page/our-services/" className="mr-[20px] xs:mr-[10px] font-medium rounded-none font-serif uppercase hover:text-darkgray btn-slide-filling-right bg-gradient-to-r from-darkgray to-darkgray" size="md" color="#fff" themeColor="#fff" title="DISCOVER LITHO" />
        <Buttons to="/page/what-we-offer" className="font-medium rounded-none font-serif uppercase hover:text-white bg-transparent btn-slide-right" color="#232323" size="md" themeColor="#232323" title="READ MORE" />
      </div>
    </m.div>
  </Row>
</Container>
</section>