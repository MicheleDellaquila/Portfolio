import React from 'react';
import { useTranslation } from 'react-i18next';
import "./WorkExperience.scss";
import * as Scroll from 'react-scroll';


// var 
let Element = Scroll.Element;


const WorkExperience = () => {
    const { t } = useTranslation();


    return (
        <Element name={t("Esperienze")} className="WorkExperience">
            <div className="WorkExperience__container container">
                <h1 className="WorkExperience__title dispaly-6">Work Experience</h1>
                <div className="WorkExperience__row">
                    <div className="WorkExperience__experience">
                        <h1>2018</h1>
                        <div className="WorkExperience__experience__details">
                            <h3>E-commerce</h3>
                            <p>{t("E-commerce")}</p>
                            <div className="WorkExperience__experience__technologies">
                                <ul>
                                    <li>Wordpress</li>
                                    <li>Woo-commerce</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="WorkExperience__experience">
                        <h1>2018</h1>
                        <div className="WorkExperience__experience__details">
                            <h3>E-commerce</h3>
                            <p>{t("E-commerce")}</p>
                            <div className="WorkExperience__experience__technologies">
                                <ul>
                                    <li>Wordpress</li>
                                    <li>Woo-commerce</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="WorkExperience__experience">
                        <h1>2019</h1>
                        <div className="WorkExperience__experience__details">
                            <h3>Car management</h3>
                            <p>{t("Car-management")}</p>
                            <div className="WorkExperience__experience__technologies">
                                <ul>
                                    <li>React native</li>
                                    <li>Redux</li>
                                    <li>JS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="WorkExperience__experience">
                        <h1>2021</h1>
                        <div className="WorkExperience__experience__details">
                            <h3>Management</h3>
                            <p>{t("Management")}</p>
                            <div className="WorkExperience__experience__technologies">
                                <ul>
                                    <li>React js</li>
                                    <li>Html5</li>
                                    <li>Css3</li>
                                    <li>Redux</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="WorkExperience__experience">
                        <h1>2021</h1>
                        <div className="WorkExperience__experience__details">
                            <h3>Management Library</h3>
                            <p>{t("Management-Library")}</p>
                            <div className="WorkExperience__experience__technologies">
                                <ul>
                                    <li>React js</li>
                                    <li>Html5</li>
                                    <li>Css3</li>
                                    <li>Redux</li>
                                    <li>Express js / Node js</li>
                                    <li>Mongo db</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default WorkExperience;
