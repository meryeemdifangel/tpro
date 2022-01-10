
import './ProcessItem.css';




function ProcessItem({img , title , text }) {

  return (
  
<div className='ProcessItem'>
<img src={img} className='imgProcessItem' />
<div className='skillProcessItem'>
{title}
</div>
<div className='skillDetailsProcessItem'>
{text}
</div>
</div>  

  
  );
}

export default ProcessItem;
