
import './Process.css';
import light from '../../assets/light.svg'
import concept from '../../assets/concept.svg'
import code from '../../assets/code.svg'
import prototype from '../../assets/prototype.svg'
import third from '../../assets/third.svg'
import ProcessItem from '../ProcessItem/ProcessItem';




function Process() {

  return (
  
<div className='MyServices'>
<div className='HighServices'>
    Working Flow
</div>

<div className='containFive' >   
<ProcessItem  img={light} title='Discover' text='I conduct user research to identify the problem I want to solve.' />
<ProcessItem  img={concept} title='Define' text='I brainstorm possible design solutions to the identified problem.' />
<ProcessItem  img={third} title='Ideate' text='I create wireframes and sketches of the product I’m about to design.' />
<ProcessItem  img={prototype} title='Prototype' text='I create high fidelity design and prototype the screens.' />
<ProcessItem  img={code} title='Implement' text='After designing, I deliver for implementation.' />

</div>

</div>  

  
  );
}

export default Process;
