import './App.css';
import './index.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Projetos from './Components/Projetos/Projetos';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header /> 
      <AboutMe/>
      <Projetos/>
      <Footer/>
    </div>
  );
}

export default App;
