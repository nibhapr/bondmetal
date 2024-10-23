import React, { useRef } from 'react'

// // Libraries
 import { Col, Container, Navbar, Row } from 'react-bootstrap';
 import { Parallax,ParallaxProvider } from 'react-scroll-parallax';
 import { AnimatePresence, m } from 'framer-motion'
 import { Form, Formik } from 'formik';

// Components

 import { fancyTextBox02 } from '../components/FancyTextBox/FancyTextBoxData';
// import SocialIcons from '../components/SocialIcon/SocialIcons';
  import FancyTextBox from '../components/FancyTextBox/FancyTextBox';
 import { ContactFormStyle03Schema } from '../components/Form/FormSchema';
 import { Checkbox, Input, TextArea } from '../components/Form/Form'
// import MessageBox from '../components/MessageBox/MessageBox';
 import Buttons from '../components/Button/Buttons'
 import GoogleMap from '../components/GoogleMap/GoogleMap';
// import { resetForm, sendEmail } from '../Functions/Utilities';


//Data
// const SocialIconsData = [
//   {
//     color: "#3b5998",
//     link: "https://www.facebook.com/",
//     icon: "fab fa-facebook-f"
//   },
//   {
//     color: "#00aced",
//     link: "https://twitter.com/",
//     icon: "fab fa-twitter"
//   },
//   {
//     color: "#fe1f49",
//     link: "https://www.instagram.com/",
//     icon: "fab fa-instagram"
//   },
//   {
//     color: "#007bb6",
//     link: "https://www.linkedin.com/",
//     icon: "fab fa-linkedin-in"
//   },
// ]


const ContactUsClassicPage = (props) => {
  const form = useRef(null)
  return (
    <div style={props.style}>
     
   
       <m.section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col xl={6} lg={7} className="text-center mb-[4.5rem] md:mb-12">
              <span className="font-serif mb-[5px] -tracking-[.5px] text-xmd block">Fill out the form and we'll be in touch soon!</span>
              <h4 className="font-serif font-semibold text-darkgray">How we can help you?</h4>
            </Col>
            <Col className="col-xl-10 col-sm-12 col-xs-12">
              <Formik
                initialValues={{ name: '', email: '', phone: '', comment: '', terms_condition: false }}
                validationSchema={ContactFormStyle03Schema}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true)
                  const response = await sendEmail(values)
                  response.status === "success" && resetForm(actions)
                }}
              >
                {({ isSubmitting, status }) => (
                  <Form ref={form}>
                    <Row className="row-cols-1 row-cols-md-2">
                      <Col className="mb-16 sm:mb-[25px]">
                        <Input showErrorMsg={false} type="text" name="name" className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your name" />
                        <Input showErrorMsg={false} type="email" name="email" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your email address" />
                        <Input showErrorMsg={false} type="tel" name="phone" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" placeholder="Mobile number" />
                      </Col>
                      <Col className="mb-16 sm:mb-[20px]">
                        <TextArea className="border-[1px] border-solid border-[#dfdfdf] w-full py-[15px] px-[20px] text-md h-[210px] resize-none" rows="6" name="comment" placeholder="Your message"></TextArea>
                      </Col>
                      <Col className="text-left sm:mb-[20px]">
                        <Checkbox type="checkbox" name="terms_condition" className="inline-block mt-[4px]" labelClass="flex items-start">
                          <span className="ml-[10px] text-sm inline-block w-[85%]">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the<a aria-label="checkbox" to="/privacy" target="_blank" className="text-darkgray underline hover:text-fastblue"> privacy policy</a>.</span>
                        </Checkbox>
                      </Col>
                      <Col className="text-right sm:text-center">
                        <Buttons type="submit" className={`text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""}`} themeColor={["#b884fd", "#fe73a8", "b884fd"]} size="md" color="#fff" title="Send Message" />
                      </Col>
                    </Row>
                    <AnimatePresence>
                      {status && <Row><Col xs={12}><div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] py-[10px]" theme="message-box01" variant="success" message="Your message has been sent successfully!" /></div></Col></Row>}
                    </AnimatePresence>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </m.section> 
      

    

       <section>
        <GoogleMap
          className=" h-[400px] p-0 md:h-[450px] xs:h-[300px]"
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10543.900043209489!2d54.468406581896!3d24.36313463061232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40fcf06c84c1%3A0x4d5c65ec02843da0!2sMusaffah%20-%20M-17%20-%20Abu%20Dhabi!5e1!3m2!1sen!2sae!4v1729338006027!5m2!1sen!2sae"
        />


      </section> 
      

    </div>


  )
}

export default ContactUsClassicPage