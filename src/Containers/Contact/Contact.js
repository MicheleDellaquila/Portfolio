import React from 'react';
import "./Contact.scss";

const Contact = () => {
    return (
        <div className="Contact">
            <div className="Contact__container container">
                <div className="Contact__box col-xs-12">
                    <h1 className="dispaly-3">Crea il tuo sito web</h1>
                    <p>Contattami per creare il tuo sito , creare collaborazioni e tanto altro.</p>
                    <button className="Contact__btn">
                        <a href="mailto:micheledellaquila2003@gmail.com">Contattami</a>
                    </button>
                </div>
                <div className="Contact__overlay" />
            </div>
        </div>
    )
}

export default Contact;
