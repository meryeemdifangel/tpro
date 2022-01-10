import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import WhoAmI from './Components/WhoAmI/WhoAmI';
import MyServices from './Components/MyServices/MyServices';
import Process from './Components/Process/Process';
import Footer from './Components/Footer/Footer';
import MyProjects from './Components/MyProjects/MyProjects';
import Test from './Components/Test/Test';


function App() {
  return (
    <div className="App">
      <Navbar/>
<Hero />
<WhoAmI /> 
<MyServices />
<Process />
<MyProjects />
<Footer />

    </div>
  );
}

export default App;
