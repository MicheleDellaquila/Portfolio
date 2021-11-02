import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Footer from './Containers/Footer/Footer';
import Home from './Containers/Home/Home';
import Project from './Containers/Projects/Project';
import WorkExperience from './Containers/WorkExperience/WorkExperience';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ManagementLibrary from './Containers/ManagementLibrary/ManagementLibrary';


function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
        <About />
        <WorkExperience />
        <Project />
        <Contact />
        <Footer />
      </Route>
      <Route exact path="/Management-Library">
        <ManagementLibrary />
      </Route>
    </Router>
  );
}

export default App;
