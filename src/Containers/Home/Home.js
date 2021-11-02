import React, { useState } from 'react';
import "./Home.scss";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../assets/Icon/MD.svg";
import HomeImage from "../../assets/Image/Home.png";
import Curriculum from "../../assets/Curriculum/Curriculum.pdf";
import Menu from '../Menu/Menu';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';


// var
let Link = Scroll.Link;
let Element = Scroll.Element;


const Home = () => {
    const [ statusMenu , setStatusMenu ] = useState(false);
    const { t } = useTranslation();


    // status menu
    const statusMenuHandler = () => {
        setStatusMenu(prev => !prev);
    };


    // close menu 
    const closeMenuHandler = () => {
        setStatusMenu(prev => !prev);
    };


    return (
        <Element name="Home" className="Home">
            <main className="Home__main container">
                <header className="Home__header">
                    <div className="container">
                        <div className="row align-center justify-between">   
                            <figure className="Home__header__contentLogo flex align-center">
                                <img className="Home__header__logo" src={Logo} alt="icon" />
                                <h3 className="Home__header__title">Michele Dellaquila</h3>
                            </figure>
                            <nav className="Home__header__nav">
                                <ul className="flex">
                                    <li className="Home__header__item">Home</li>
                                    <li className="Home__header__item">
                                        <Link to={t("Competenze")} spy={true} smooth={true} offset={50} duration={500}>
                                            {t("Competenze")}
                                        </Link>
                                    </li>
                                    <li className="Home__header__item">
                                        <Link to={t("Esperienze")} spy={true} smooth={true} offset={50} duration={500}>
                                            {t("Esperienze")}
                                        </Link>
                                    </li>
                                    <li className="Home__header__item">
                                        <Link to={t("Progetti")}  spy={true} smooth={true} offset={50} duration={500}>
                                            {t("Progetti")} 
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="Home__header__menu" onClick={statusMenuHandler}>   
                                {statusMenu ? <CloseIcon /> : <MenuIcon />}
                            </div>
                        </div>
                    </div>
                    <CSSTransition
                        in={statusMenu}
                        timeout={600}
                        classNames="menuAnimation"
                        unmountOnExit
                    >
                        <Menu onCloseMenu={closeMenuHandler} />
                    </CSSTransition>
                </header>
                <div className="row align-center">
                    <div className="col-xs-12 col-lg-6">
                        <h1 className="Home__main__title dispaly-4">Michele Dellaquila</h1>
                        <p className="Home__main__subtitle h3">{t("Presentazione")}</p>
                        <button className="Home__main__btn">
                            <a href={Curriculum} download>Dowload cv</a>
                        </button>
                    </div>
                    <div className="col-lg-6">
                        <img className="Home__main__image" src={HomeImage} alt="home" />
                    </div>
                </div>
            </main>        
        </Element>
    )
}


export default Home;
