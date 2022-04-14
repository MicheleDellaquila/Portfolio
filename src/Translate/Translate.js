import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      SuDiMe: 'Su di me',
      Esperienze: 'Maggiori esperienze',
      Hero: 'Negli ultimi 3 anni , ho passato il mio a tempo a svilluppare siti web per aziende locali e negozi locali per aiutarli a crescere e aiutare me medesimo nella crescita professionale.',
      HeroSubtitle: 'Ciao , Mi chiamo',
      HeroTitle: 'Sono un sviluppatore Web',
      AboutTopTitle: 'Ciao, Sono Michele!',
      AboutSubtitle: 'Negli ultimi 3 anni , ho passato il mio a tempo a svilluppare siti web',
      AboutText: `Offro un servizio di progettazione professionale dal 2019 evolvendo con il settore. Sono appassionato di sviluppatori di software con 3 anni di esperienza. Adoro
      tecnologia e dedico molto tempo a migliorare le mie conoscenze, rimanere aggiornato e
      scopri gli strumenti. In questi due anni ho sviluppato applicazioni e applicazioni web
      per dispositivi iOS e Android con reattività e reazione nativa, ne ho usati diversi
      framework per lavori nella mia città come WordPress o bootstrap.Sono una persona ambiziosa che ama lavorare in team, proporre idee e collaborare.`,
      AboutBtn: 'Conttatami',
      FirstExperience:
        'Realizzazione di e-commerce con utilizzo di wordpress + plugin di supporto come Woocomerce.',
      SecondExperience:
        'Realizzazione di e-commerce con utilizzo di wordpress + plugin di supporto come Woocomerce.',
      ThirdExperience:
        'Realizzazione di un sistema gestionale in reazione per la gestione di una spiaggia.',
      FourExperience:
        'Realizzazione di un software gestionale per la gestione aziendale: prenotazioni, voucher, utenti in piattaforma.',
      FiveExperience: 'Sviluppatore presso aigot srl',
      FooterIta: 'Italiano',
      FooterEng: 'Inglese',
    },
  },
  en: {
    translation: {
      SuDiMe: 'About me',
      Esperienze: 'More Experiences',
      Hero: 'My name is michele dellaquila and I have been developing web for 3 years. I love technology and spend a lot of time improving my knowledge and keeping up to date on new tools.',
      HeroSubtitle: 'Hello, My name is',
      HeroTitle: "I'm a web developer",
      AboutTopTitle: "Hi, I'm Michele!",
      AboutSubtitle: "For the past 3 years, I've spent my time developing websites",
      AboutText: `I have been offering a professional design service since 2019, evolving with the sector. I am passionate about software developers with 3 years of experience. I adore
      technology and I spend a lot of time improving my knowledge, staying up to date and
      discover the tools. In these two years I have developed applications and web applications
      for iOS and Android devices with native responsiveness and reaction, I have used several
      framework for jobs in my city like WordPress or bootstrap. I am an ambitious person who loves to work in a team, propose ideas and collaborate.`,
      AboutBtn: 'Contact',
      FirstExperience:
        'Creation of e-commerce using wordpress + support plugin such as Woocomerce.',
      SecondExperience:
        'Creation of e-commerce using wordpress + support plugin such as Woocomerce.',
      ThirdExperience:
        'Realization of a management system in reaction for the management of a beach.',
      FourExperience:
        'Realization of a management software for business management: reservations, vouchers, platform users.',
      FiveExperience: 'Developer at aigot srl',
      FooterIta: 'Italian',
      FooterEng: 'English',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'it',
});

export default i18n;
