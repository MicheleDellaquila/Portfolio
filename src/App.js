import { Fragment } from 'react';
import About from './Containers/About/About';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Header from './Components/Header/Header';
import Skills from './Containers/Skills/Skills';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Footer />
    </Fragment>
  );
}

export default App;
