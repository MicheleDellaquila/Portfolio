import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    it: {
        translation: {
            "Competenze": "Competenze",
            "Esperienze": "Esperienze",
            "Progetti": "Progetti",
            "Presentazione": "Mi chiamo michele dellaquila e sviluppo web da 3 anni. Amo la tecnologia e passo molto tempo a migliorare le mie conoscenze e tenermi aggiornato su nuovi strumenti.",
            "WebDeveloper": "Svilluppo web da 3 anni circa. Ho diverse esperienze con il web e le mie skill principali sono: HTML5 , CSS3 , JS/TS e React js",
            "MobileDeveloper": "Svilluppo mobile, ios / android ,con il supporto di react native (JS / TS) che mi ha permesso di cimentarmi in diversi progetti.",
            "JSDev": "Junior javascript developer da circa 3 anni. Esperienza in JS vanilla , Jquery e Ecmascript 6 e versioni successive.",
            "FullDeveloper": "Conoscenza di Node js , Express js e Mongo db , oltre alla mia esperienza di JS / TS , HTML5 e CSS3.",
            "E-commerce": "Creazione di e-commerce utilizzando wordpress + plugin di supporto come Woocomerce.",
            "Car-management": "Creazione di un'app reattiva nativa che si occupa della gestione delle vostre auto tramite schede informative.",
            "Management": "Creazione di un gestionale in react per la gestione di un lido.",
            "Management-Library": "Gestione di una biblioteca per la visione di quest’ultima e l'aggiunta dei libri.",
            "Social-clone": "Crezione di un social con le funzionalità principali di instagram , facebook.",
            "Contact-title": "Crea il tuo sito web",
            "Contact-text": "Contattami per creare il tuo sito , creare collaborazioni e tanto altro.",
            "Italiano": "Italiano",
            "Inglese": "Inglese",
            "Info-progetto": "Info progetto",
            "Data-inizio": "Data inizio",
            "Data-fine": "Data fine",
            "Tecnologie-utilizzate": "Tecnologie utilizzate",
        },
    },
    en: {
        translation: {
            "Competenze": "Skills",
            "Esperienze": "Experiences",
            "Progetti": "Project",
            "Presentazione": "My name is michele dellaquila and I have been developing web for 3 years. I love technology and spend a lot of time improving my knowledge and keeping up to date on new tools.",
            "WebDeveloper": "Web development for about 3 years. I have several experiences with the web and my main skills are: HTML5, CSS3, JS / TS and React js",
            "MobileDeveloper": "Mobile development, ios / android, with the support of react native (JS / TS) which allowed me to try my hand at different projects.",
            "JSDev": "Junior javascript developer for about 3 years. Experience in JS vanilla, Jquery and Ecmascript 6 and above.",
            "FullDeveloper": "Knowledge of Node js, Express js and Mongo db, in addition to my experience of JS / TS, HTML5 and CSS3.",
            "E-commerce": "Creation of e-commerce with the use of wordpress + support plugins such as Woocomerce.",
            "Car-management": "Creation of a react native app that takes care of the management of your cars through information cards.",
            "Management": "Creation of a management system in reaction for the management of a beach.",
            "Management-Library": "Management of a library for the vision of the latter.",
            "Social-clone": "Creation of a social network with the main features of instagram, facebook.",
            "Contact-title": "Create your website",
            "Contact-text": "Contact me to create your site, create collaborations and much more.",
            "Italiano": "Italian",
            "Inglese": "English",
            "Info-progetto": "Info project",
            "Data-inizio": "Start date",
            "Data-fine": "Finish date",
            "Tecnologie-utilizzate": "Used technologies",
        }
    },
};



i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "it",
    fallbackLng: "it",
  });

export default i18n;