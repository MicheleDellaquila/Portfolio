import React from 'react';
import "./Social.scss";
import NotFound from "../../assets/Icon/NotFound.jpg";
import { useHistory } from "react-router-dom";

const Social = () => {
    const history = useHistory();

    return (
        <div className="Social">
            <div className="Social__container container">
                <div className="Social__row row">
                    <div className="Social__content col-xs-12 col-md-8 col-lg-5">
                        <div className="Social__content__info">
                            <h1 className="dispaly-5">Pagina non trovata</h1>
                            <p>La pagina non è ancora disponibile.</p>
                            <button className="Social__btn" onClick={() => {
                                history.replace("/")
                            }}>Go back</button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-8 col-lg-7">
                        <img className="Social__image" src={NotFound} alt="not found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social;
