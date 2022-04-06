import { Fragment } from 'react';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Footer from './Containers/Footer/Footer';
import Hero from './Containers/Hero/Hero';
import WorkExperience from './Containers/WorkExperience/WorkExperience';
import Header from './Containers/Header/Header';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
