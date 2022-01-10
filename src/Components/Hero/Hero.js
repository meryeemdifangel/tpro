
import './Hero.css';
import isaac from '../../assets/isaac.mp4'
import onne from '../../assets/onne.svg'
import hi from '../../assets/hi.svg'
import { Link } from 'react-scroll';




function Hero() {

  return (
  <div className='hero' id='hero' >
  <video className='vid' src={isaac} autoPlay muted loop / >
  <div className='meInfos'>
<div className='hayDiv'>
  <img src={hi} className='hiImg' />
Hay brainies , It's
</div>
<div className='myName'>
  Meryem Malak Dif
</div>
<div className='myFunction'>
  React Developer+Mern Developer
</div>
<div className='myDesc'>
I’m a react developer with front end development skills and a MERN stack developer.
</div>
<Link to='about' smooth={true} duration={500} spy={true} exact={true} className='firstBtn'>

  More About Me

</Link>

  </div>
  <img src={onne} className='meImg' />
  
  </div>




  
  );
}

export default Hero;
