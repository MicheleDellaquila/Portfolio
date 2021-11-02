import React from 'react';
import "./Project.scss";
import { useTranslation } from 'react-i18next';
import Library from "../../assets/Image/Library.png";
import Social from "../../assets/Image/Social.png";
import * as Scroll from 'react-scroll';
import { useHistory } from 'react-router';


// var
let Element = Scroll.Element;



const Project = () => {
    const { t } = useTranslation();
    const history = useHistory();


    // select project 
    const selectProjectHandler = (nameProject) => {
        if(nameProject === "Management-Library") {
            history.push("/Management-Library");
        } else {
            history.push("/Social");
        };
    };


    return (
        <Element name={t("Progetti")} className="Project">
            <div className="Project__container container">
                <h1 className="Project__title dispaly-6">Projects</h1>
                <div className="Project_row row">
                    <div className="col-xs-12 col-lg-4">
                        <article className="Project__card" onClick={() => selectProjectHandler("Management-Library")}>
                            <img className="Project__card__image" src={Library} alt="Management-Library" />
                            <div className="Project__card__description">   
                                <h1>Management-Library</h1>
                                <p>{t("Management-Library")}</p>
                                <ul className="Project__card__technologies row">
                                    <li>React js</li>
                                    <li>Html5</li>
                                    <li>Css3</li>
                                    <li>Redux</li>
                                    <li>Express js / Node js</li>
                                    <li>Mongo db</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <article className="Project__card" onClick={() => selectProjectHandler("Social")}>
                            <img className="Project__card__image" src={Social} alt="Social clone" />
                            <div className="Project__card__description">
                                <h1>Social clone</h1>
                                <p>{t("Social-clone")}</p>
                                <ul className="Project__card__technologies row">
                                    <li>React js</li>
                                    <li>Html5</li>
                                    <li>Css3</li>
                                    <li>Redux</li>
                                    <li>Express js / Node js</li>
                                    <li>Mongo db</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Project;
