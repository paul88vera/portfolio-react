import './App.css';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Nav />
      <Gallery />
      <ContactForm />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
