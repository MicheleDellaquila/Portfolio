import React from 'react';
import "./BookImage.scss";


const BookImage = ({ gallery }) => {
    return (
        <div className="BookImage">
            <div className="BookImage__content">
                <div className="BookImage__content__image">
                    <img src={gallery[0]} alt="Home Library" />
                </div>
            </div>
            <div className="BookImage__content row">
                <div className="BookImage__content__image image--3 col-xs-12 col-sm-6">
                    <img src={gallery[1]} alt="add book" />
                </div>
                <div className="BookImage__content__image image--4 col-xs-12 col-sm-6">
                    <img src={gallery[2]} alt="Loader Library" />
                </div>
            </div>
        </div>
    )
}

export default BookImage
