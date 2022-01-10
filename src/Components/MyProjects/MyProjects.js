
import './MyProjects.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from '../Card/Card';
import Project from '../Project/Project';


function MyProjects() {
  return (
    <div className="MyProjects" id='skills' >
<div className='HighServices'>
    My Projects
</div>
<div className='containThree' >
    <Project img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HtGf2Kp1V86nj-UdFXXEjKLcRCW_Dv9bIQ&usqp=CAU' title='Clean Design'  />
    <Project img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQra-NQ7aPOV1PT7MLNlgHR7sX8T0YhQGxn9TIM-RoQjkpO5U7xVs_FB5FAgMvuXwI0wDs&usqp=CAU' title='Responsive website'  />
    <Project img='https://media-www.sqspcdn.com/images/pages/tour/designer-templates/intro-block/website-ui-1000w.jpg' title='Ecommere website'  />


</div>
    </div>
  );
}

export default MyProjects;
