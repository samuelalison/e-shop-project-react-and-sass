import './App.scss';
import Carousal from './components/Carousal';
import CreamSection from './components/CreamSection';
import { Header } from './components/Header';
import Section  from './components/Section';
import SmallSection from './components/SmallSection';
import { Data } from './components/Data';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Header />
    <Section /> 
    <SmallSection />
    <CreamSection />
    <Carousal slides={Data}/>
    <Footer /> 
    </div>
  );
}

export default App;

