
import Header, { HeaderLanguage, HeaderNav, Menu, SearchBar, Topbar } from '../components/Header/Header';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import SocialIcons from '../components/SocialIcon/SocialIcons';
import HeaderData from '../components/Header/HeaderData'
const SocialIconsData = [
  {
    color: "#0038e3",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  },
  {
    color: "#0038e3",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble"
  },
  {
    color: "#0038e3",
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  },
  {
    color: "#0038e3",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  }
]

const HeaderDigitallink = (props) => {

    return (
    <div style={props.style}>

       <Header className="header-with-topbar" topSpace={{ desktop: true }} type="reverse-scroll">
        <Topbar className="bg-headertop border-b home-business-topbar border-[#0000001a] sm:hidden md:px-0 header-with-topbar border-bottom px-[35px]">
          <Container fluid>
            <Row className="justify-between pl-[15px] lg:pr-[15px] items-center">
              <Col className="col-12 text-center sm:text-start col-sm-auto me-auto ps-lg-0">
                <SocialIcons theme="social-icon-style-01 " size="xs" iconColor="light" data={SocialIconsData} />
              </Col>
              <Col className="col-auto none sm:block text-end lg:px-0">
                <span className="top-bar-contact-list border-l border-inherit	py-[9px] px-[18px] text-[13px] inline-block float-left text-white">
                  <i className="feather-phone-call text-white mr-[6px] text-md relative top-[1px]"></i>  +971 050 4132 803
                </span>


                <span className="top-bar-contact-list border-l border-inherit	py-[9px] px-[18px] text-[13px] inline-flex float-left text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class='mt-1 mr-1.5' width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977c0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162l-2.824.741l.753-2.753l-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.4 7.4 0 0 1 5.275 2.188a7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112s-.58.729-.711.879s-.262.168-.486.056s-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666c-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008a.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321s1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473c.537.171 1.026.146 1.413.089c.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067s-.207-.151-.43-.263" clipRule="evenodd"></path></svg>
                
                    +971 055 895 2593
                </span>


                <span className="border-l border-inherit py-[9px] pl-[18px] text-[13px] inline-block float-left border-r-0 pr-0 text-white">
                  <i className="feather-map-pin text-white mr-[6px] text-md relative top-[1px]"></i> Showroom No 6, M 17, Musaffah- Abu Dhabi
                </span>
              </Col>
            </Row>
          </Container>
        </Topbar>
        <HeaderNav fluid="fluid" theme="light" bg="white" menu="light" className="px-[35px] py-[0px] md:px-[15px] sm:px-0" containerClass="md:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <a aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-gradient-sky-blue-pink.webp' data-rjs='/assets/img/webp/logo-gradient-sky-blue-pink@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-gradient-sky-blue-pink.webp' data-rjs='/assets/img/webp/logo-gradient-sky-blue-pink@2x.webp' alt='logo' />
              </Navbar.Brand>
            </a>
          </Col>
          <Navbar.Toggle className="order-last sm:hidden md:mx-[15px]">
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="col-auto justify-end p-0">
            <Menu data={HeaderData} />
          </Navbar.Collapse>
          <Col className="col-auto text-right !pr-0 pl-[15px] md:pl-0 md:pr-[15px] sm:pr-0">
            <SearchBar className="pl-[17px] xs:px-[15px]" />
            <HeaderLanguage className="pl-[17px] xs:pl-0 xs:pr-0" />
          </Col>
        </HeaderNav>
        </Header>
      </div>
       )
    }
    
    export default HeaderDigitallink