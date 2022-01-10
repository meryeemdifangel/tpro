
import './Card.css';
import Rain from '../../assets/Rain.mp4'
import onne from '../../assets/onne.svg'
import hi from '../../assets/hi.svg'




function Card({img , title , text }) {

  return (
  
<div className='Card'>
<img src={img} className='imgCard' />
<div className='skill'>
{title}
</div>
<div className='skillDetails'>
{text}
</div>
</div>  

  
  );
}

export default Card;
