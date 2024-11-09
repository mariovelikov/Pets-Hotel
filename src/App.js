import { useRef } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SiteContent from './components/SiteContent';

function App() {
  const services = useRef(null);
  const aboutUs = useRef(null);


  const handleScroll = (sectionRef) =>{
    if(sectionRef.current){
      sectionRef.current.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div className="App">
      <Navigation handleScroll={handleScroll} services={services} aboutUs={aboutUs}/>
      <SiteContent services={services} aboutUs={aboutUs}/>
    </div>
  );
}

export default App;
