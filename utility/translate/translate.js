import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      SuDiMe: 'Su di me',
      Progetti: 'Progetti',
      HeroTitle: 'Ciao, sono un sviluppatore web',
      HeroText: `Negli ultimi 3 anni , ho passato il mio a tempo a svilluppare siti
      web per aziende locali e negozi locali per aiutarli a crescere e
      aiutare me medesimo nella crescita professionale.`,
      Skills1: 'Creazioni siti web: html5 / css3',
      Skills2: 'Conoscenza pattern mern',
      Skills3: 'Sviluppo web app con react js / next js',
      AboutTitle: 'Ciao, Sono Michele!',
      AboutText:
        'Negli ultimi 3 anni , ho passato il mio a tempo a svilluppare siti web',
      AboutDesciption:
        'Offro un servizio di progettazione professionale dal 2019 evolvendo con il settore. Sono appassionato di sviluppatori di software con 3 anni di esperienza. Adoro tecnologia e dedico molto tempo a migliorare le mie conoscenze, rimanere aggiornato e scopri nuovi strumenti. In questi due anni ho sviluppato applicazioni e applicazioni web per dispositivi iOS e Android con reattività e reazione nativa.',
      AboutBtn: 'Contattami',
      ProgettiTitle: 'I miei progetti ?',
      ProgettiText:
        'In questi tre anni ho svolto diversi progetti per vare industrie , negozie locali e tanto altro.Visiona i miei progetti tramite il mio profilo git hub per apprendere le mie skill e le metodologie attuate.',
      PerogettiBtn: 'I miei progetti',
      FooterText:
        'Negli ultimi 3 anni , ho passato il mio a tempo a svilluppare siti web per aziende locali e negozi locali per aiutarli a crescere e aiutare me medesimo nella crescita professionale.',
    },
  },
  en: {
    translation: {
      SuDiMe: 'About me',
      Esperienze: 'More Experiences',
      Progetti: 'Project',
      HeroTitle: "Hi, I'm a web developer",
      HeroText: `For the past 3 years, I've spent my time developing sites
      web for local businesses and local stores to help them grow e
      help myself in my professional growth.`,
      Skills1: 'Website creations: html5 / css3',
      Skills2: 'Knowledge pattern mern',
      Skills3: 'Web app development with react js / next js',
      AboutTitle: "Hi, I'm Michele!",
      AboutText: "For the past 3 years, I've spent my time developing websites",
      AboutDesciption:
        'I have been offering a professional design service since 2019, evolving with the sector. I am passionate about software developers with 3 years of experience. I love technology and spend a lot of time improving my knowledge, staying up to date and discovering new tools. In these two years I have developed applications and web applications for iOS and Android devices with native responsiveness and reaction.',
      AboutBtn: 'Contact me',
      ProgettiTitle: 'My projects?',
      ProgettiText:
        'In these three years I have carried out several projects for various industries, local shops and much more. View my projects through my git hub profile to learn my skills and the methodologies implemented.',
      PerogettiBtn: 'My projects',
      FooterText:
        'Over the 3 years, I have spent my time developing websites for local businesses and local shops to help them grow and help myself in professional growth.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'it',
});

export default i18n;
