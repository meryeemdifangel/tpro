
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import {

  Link
} from "react-scroll";

function Navbar() {
  return (
    <div className="Navbar">
     <div className='logo' >
       M.space
     </div>
       <ul className='listNav'>
           <Link className='listItem'  to='hero' smooth={true} duration={500} spy={true} exact={true}>
           Home
           </Link>
       
  
           <Link className='listItem' to='about' smooth={true} duration={500} spy={true} exact={true}>
           About
           </Link>
       
         <Link className='listItem' to='services' smooth={true} duration={500} spy={true} exact={true}>
         Services
           </Link>
           
         <Link className='listItem' to='skills' smooth={true} duration={500} spy={true} exact={true}>
         Portfolio
           </Link>
          
         <Link  className='listItemBtn' to='contact' smooth={true} duration={500} spy={true} exact={true}>
         Contact Me
           </Link>
           
    
       </ul>
    </div>
  );
}

export default Navbar;
