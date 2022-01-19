import Navbar from './components/navbar/Navbar';
import Nfts from './components/nfts/Nfts';
import Team from './components/team/Team';
import Links from './components/links/Links';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className='app' id='main'>
      <Navbar />
      <Nfts />
      <About />
      <Links />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
