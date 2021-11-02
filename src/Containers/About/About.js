import React from 'react';
import "./About.scss";
import WebDeveloper from "../../assets/Icon/WebDeveloper.png";
import AppDeveloper from "../../assets/Icon/MobileDeveloper.png";
import Js from "../../assets/Icon/javascript.png";
import FullStackDev from "../../assets/Icon/coding.png";
import * as Scroll from 'react-scroll';
import { useTranslation } from 'react-i18next';


// var
let Element = Scroll.Element;


const About = () => {
    const { t } = useTranslation();


    return (
        <Element name={t("Competenze")} className="About">
            <div className="About__container container">
                <h1 className="About__title dispaly-6">What i do</h1>
                <div className="About__row row">
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <article className="About__card">
                            <img className="About__image" src={WebDeveloper} alt="Web developer" />
                            <div className="About__card__info">
                                <h1>Web developer</h1>
                                <p>{t("WebDeveloper")}</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <article className="About__card">
                            <img className="About__image" src={AppDeveloper} alt="App developer" />
                            <div className="About__card__info">
                                <h1>App developer</h1>
                                <p>{t("MobileDeveloper")}</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <article className="About__card">
                            <img className="About__image" src={Js} alt="Js developer" />
                            <div className="About__card__info">
                                <h1>Js developer</h1>
                                <p>{t("JSDev")}</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <article className="About__card">
                            <img className="About__image" src={FullStackDev} alt="Full stack developer" />
                            <div className="About__card__info">
                                <h1>Full stack developer</h1>
                                <p>{t("FullDeveloper")}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default About;
