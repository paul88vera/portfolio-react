import './App.css';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
