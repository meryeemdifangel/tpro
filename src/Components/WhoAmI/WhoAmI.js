
import './WhoAmI.css';
import Rain from '../../assets/Rain.mp4'
import onne from '../../assets/onne.svg'
import meryem2 from '../../assets/meryem2.jpg'




function WhoAmI() {

  return (
  
<div className='WhoAmI' id='about'>
  <div className='imgContainer'>
  <img src={meryem2} className='myPicture' />
  </div>

<div className='myDef'>
<div className='High'>
Who I am ?
</div>
<div className='title'>
About Me
</div>
<div className='text'>
I’m Dif Meryem Malak, a professional and talented Product Designer with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.
</div>
<div className='text'>
I develop websites with HTML, CSS , JavaScript ,react and Mern.
</div>
</div>
</div>  

  
  );
}

export default WhoAmI;
