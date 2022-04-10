import { Fragment } from 'react';
import About from './Containers/About/About';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import WorkExperience from './Containers/WorkExperience/WorkExperience';
import Header from './Components/Header/Header';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Footer />
    </Fragment>
  );
}

export default App;
