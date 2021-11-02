import React from 'react';
import "./Menu.scss";
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';

// var
let Link = Scroll.Link;


const Menu = ({ onCloseMenu }) => {
    const { t } = useTranslation();


    return (
        <div className="Menu">
            <ul className="Menu__list">
                <li className="Menu__list__item">
                    Home
                </li>
                <li className="Menu__list__item">
                    <Link onClick={() => onCloseMenu()} to={t("Competenze")} spy={true} smooth={true} offset={50} duration={500}>
                        {t("Competenze")}
                    </Link>
                </li>
                <li className="Menu__list__item">
                    <Link onClick={() => onCloseMenu()} to={t("Esperienze")} spy={true} smooth={true} offset={50} duration={500}>
                        {t("Esperienze")}
                    </Link>
                </li>
                <li className="Menu__list__item">
                    <Link onClick={() => onCloseMenu()} to={t("Progetti")} spy={true} smooth={true} offset={50} duration={500}>
                        {t("Progetti")}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
