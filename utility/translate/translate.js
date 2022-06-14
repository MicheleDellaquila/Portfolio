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
      Skills1: "Creazioni siti web: html5 / css3",
      Skills2: "Conoscenza pattern mern",
      Skills3: "Sviluppo web app con react js / next js",
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
      Skills1: "Website creations: html5 / css3",
      Skills2: "Knowledge pattern mern",
      Skills3: "Web app development with react js / next js",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'it',
});

export default i18n;
