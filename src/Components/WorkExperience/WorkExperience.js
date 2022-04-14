import React from 'react';
import { useTranslation } from 'react-i18next';
import './WorkExperience.scss';
import * as Scroll from 'react-scroll';
import Experiences from '../../Utility/Experiences.js';

// var
let Element = Scroll.Element;

const WorkExperience = () => {
  const { t } = useTranslation();

  // experience text
  const experienceText = (index) => {
    switch (text) {
      case 0:
        return t('FirstExperience');

      case 1:
        return t('SecondExperience');

      case 2:
        return t('SecondExperience');

      case 3:
        return t('SecondExperience');

      case 4:
        return t('SecondExperience');
    }
  };

  return (
    <Element name={t('Esperienze')} className='WorkExperience'>
      <div className='WorkExperience__wrapper'>
        <h1 className='WorkExperience__title'>{t('Esperienze')}</h1>
      </div>
      <div className='WorkExperience__content'>
        <ul className='WorkExperience__content-list'>
          {Experiences.map((experience, index) => {
            return (
              <li key={index} className='WorkExperience__list-item'>
                <h1 className='WorkExperience__item-title'>{experience.date}</h1>
                <div className='WorkExperience__item-right'>
                  <h3 className='WorkExperience__right-type'>{experience.type}</h3>
                  <p className='WorkExperience__right-text'>{experience.text}</p>
                  <ul className='WorkExperience__tecnologies'>
                    {experience.tecnologies?.map((tecnologie, index) => {
                      return (
                        <li key={index} className='WorkExperience__tecnologies-item'>
                          {tecnologie}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Element>
  );
};

export default WorkExperience;
