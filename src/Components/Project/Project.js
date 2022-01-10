
import './Project.css';
import pul from '../../assets/pul.jpg'
import onne from '../../assets/onne.svg'
import hi from '../../assets/hi.svg'




function Project({img , title  }) {

  return (
  
<div className='Project'>
<img src={img} className='imgProject' />
<div className='add'>
    {title}
</div>
</div>  

  
  );
}

export default Project;
