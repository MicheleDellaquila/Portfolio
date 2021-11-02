import React from 'react';
import "./Cover.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Cover = ({ image }) => {
    const history = useHistory()


    // go back
    const goBackHandler = () => {
        history.replace("/");
    };


    return (
        <div className="Cover">
            <img src={image} alt="project" />
            <header className="Cover__header" onClick={goBackHandler}>
                <ArrowBackIosIcon />
                <h1>Home</h1>
            </header>
            <div className="Cover__title">
                <h1 className="dispaly-5">Management Library</h1>
                <span className="Cover__arrowDown">
                    <KeyboardArrowDownIcon />
                </span>
            </div>
            <div className="overlay" />
        </div>
    )
}

export default Cover
