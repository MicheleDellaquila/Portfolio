import React from 'react';
import "./Footer.scss";
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';


// var
let Link = Scroll.Link;


const Footer = () => {
    const { t , i18n } = useTranslation();


    // change language
    const changeLanguageHandler = (lang) => {
        i18n.changeLanguage(lang);
        const rootElement = document.documentElement;
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };


    return (
        <footer className="Footer">
            <div className="Footer__container container">
                <div className="row">
                    <div className="Footer__col col-xs-12">
                        <div>
                            <h1 className="Footer__title">Map site</h1>
                            <ul className="Footer__list">
                                <li>
                                    <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={t("Competenze")} spy={true} smooth={true} offset={50} duration={500}>
                                        {t("Competenze")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={t("Esperienze")} spy={true} smooth={true} offset={50} duration={500}>
                                        {t("Esperienze")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={t("Progetti")} spy={true} smooth={true} offset={50} duration={500}>
                                        {t("Progetti")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__laguangeBtn">
                            <h1 onClick={() => changeLanguageHandler("it")}>{t("Italiano")}</h1>
                            <h1 onClick={() => changeLanguageHandler("en")}>{t("Inglese")}</h1>
                        </div>
                    </div>
                </div>
                <div className="Footer__Copyright">
                    <p>Copyright © 2021. Michele Dellaquila. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
