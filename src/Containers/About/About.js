import React from 'react';
import './About.scss';
import * as Scroll from 'react-scroll';
import { useTranslation } from 'react-i18next';
import AboutMe from '../../assets/Image/About.jpg';
import { FiSend } from 'react-icons/fi';

// var
let Element = Scroll.Element;

const About = () => {
  const { t } = useTranslation();

  return (
    <Element name={t('SuDiMe')} className='About'>
      <section className='About__container'>
        <div className='About__row row'>
          <div className='About__col col-lg-5'>
            <img src={AboutMe} alt='about me' />
          </div>
          <div className='About__col col-lg-5'>
            <div className='About__wrapper'>
              <h3 className='About__wrapper-topTitle'>{t('SuDiMe')}</h3>
              <h1 className='About__wrapper-title'>Ciao, Sono Michele!</h1>
              <h2 className='About__wrapper-subtitle'>
                Negli ultimi 3 anni , ho passato il mio a tempo a svilluppare siti web
              </h2>
              <p className='About__wrapper-text'>
                I am passionate about software developer with 3 years of experience.I love
                technology and I spend a lot of time to improve my knowledge, stay updated and
                discover tools.In these two years I have developed web applications and applications
                for iOS and Android devices with react and react native, I have used several
                frameworks for jobs in my city like WordPress or bootstrap. I am an ambitious person
                who loves to work in a team, propose ideas and collaborate.I am passionate about
                software developer with 3 years of experience.I love technology and I spend a lot of
                time to improve my knowledge, stay updated and discover tools.In these two years I
                have developed web applications and applications for iOS and Android devices with
                react and react native, I have used several frameworks for jobs in my city like
                WordPress or bootstrap. I am an ambitious person who loves to work in a team,
                propose ideas and collaborate.
              </p>
              <a href='mailto:micheledellaquila2003@email.com' className='About__wrapper-btn'>
                Contattami
                <FiSend className='About__btn-icon' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
