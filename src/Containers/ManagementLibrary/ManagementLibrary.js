import React from 'react';
import Cover from './Cover/Cover';
import "./ManagementLibrary.scss";
import Library from "../../assets/Image/Library.png";
import { useTranslation } from 'react-i18next';
import HomeLibrary from "../../assets/Image/Projects/HomeLibrary.png";
import AddBook from "../../assets/Image/Projects/AddBook.png";
import LoaderLibrary from "../../assets/Image/Projects/LoaderLibrary.png";
import BookImage from './BookImage/BookImage';


const ManagementLibrary = () => {
    const { t } = useTranslation();


    return (
        <div className="ManagementLibrary">
            <Cover image={Library} />
            <div className="ManagementLibrary__container container">
                <div className="ManagementLibrary__content">
                    <h3 className="ManagementLibrary__subtitle">{t("Info-progetto")}</h3>
                    <h1 className="ManagementLibrary__title dispaly-4">Management Library</h1>
                    <p className="ManagementLibrary__text">{t("Management-Library")}</p>
                    <ul className="ManagementLibrary__list row">
                        <li className="col-xs-12 col-sm-6 col-md-4">
                            <div>
                                <h1>{t("Data-inizio")}</h1>   
                                <p>10/10/21</p>
                            </div>
                        </li>
                        <li className="col-xs-12 col-sm-6 col-md-4">
                            <div>
                                <h1>{t("Data-fine")}</h1>   
                                <p>25/10/21</p>
                            </div>
                        </li>
                        <li className="col-xs-12 col-md-4">
                            <div>
                                <h1>{t("Tecnologie-utilizzate")}</h1> 
                                <p>React js , Mongo db , Express js , Node js , Js , Html5 , Css 3 </p>  
                            </div>
                        </li>
                    </ul>
                </div>
                <BookImage gallery={[HomeLibrary,AddBook,LoaderLibrary]} />
            </div>
        </div>
    )
}

export default ManagementLibrary;
