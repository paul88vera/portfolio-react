import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Resume from "./components/Resume";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <Router>
      <main className="main-page">
        <Nav />
        <div>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/contact">
              <ContactForm />
            </Route>
            <Footer />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
