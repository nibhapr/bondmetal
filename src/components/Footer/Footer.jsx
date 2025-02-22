import React, { memo, useContext, useEffect } from "react"
import { Col } from "react-bootstrap"
import GlobalContext from "../../Context/Context"
import "../../assets/scss/layouts/_footer.scss"

export const Footer = (props) => {
    // Add Global Data
    const { setFooterHeight } = useContext(GlobalContext);

    useEffect(() => {
        // Calculate Footer Height
        let footerEl = document.querySelector("footer");

        function setTopSpace() {
            let windowWidth = window.innerWidth;
            let footerHeight = 0;

            if (props.parallax) {
                if (props.parallax.desktop === true) {
                    footerHeight = footerEl.offsetHeight;
                    footerEl.classList.add("pos-fixed")
                }

                if (windowWidth <= 1199) {
                    if (props.parallax.lg === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.lg === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 991) {
                    if (props.parallax.md === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.md === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 767) {
                    if (props.parallax.sm === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.sm === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 575) {
                    if (props.parallax.xs === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed");
                    }

                    if (props.parallax.xs === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }
            }

            setFooterHeight(footerHeight - 1)
        }

        setTimeout(setTopSpace, 1000);
        window.addEventListener("resize", function () {
            setTimeout(setTopSpace, 1000);
        });
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <footer className={`${props.theme}${props.className ? ` ${props.className}` : ""}`} style={props.style}>
            {props.children}
        </footer>
    )
}

const FooterMenu = ({ data, titleClass, className, ...props }) => {
    return (
        <>
            {data.map((item, i) => {
                return (
                    <Col key={i} {...props} className={`footer-menu${className ? ` ${className}` : ""}`}>
                        {item.title && (
                            <span className={`mb-[20px] block font-medium font-serif xs:!mb-[10px]${titleClass ? ` ${titleClass}` : ""}`}>
                                {item.title}
                            </span>
                        )}
                        <ul>
                            {item.submenu.map((submenuItem, j) => {
                                return (
                                    (submenuItem.link || submenuItem.title) && (
                                        <li key={j} className="mb-[7px] last:mb-0">
                                            <a aria-label="footer menu link" href={submenuItem.link}>
                                                {submenuItem.title}
                                            </a>
                                        </li>
                                    )
                                );
                            })}
                        </ul>
                    </Col>
                );
            })}
        </>
    );
}




Footer.defaultProps = {
    theme: "dark"
}

export default memo(FooterMenu)