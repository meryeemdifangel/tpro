
import './Footer.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {
  return (
    <div className="Footer" id='contact'>
      <div className='logo' >
        M.space
      </div>
      <div className='copyRights'>
        © Copyright 2021. All right reserved
      </div>
      <div className='socialMedia'>
        <a href='https://www.instagram.com/__mer__yeem/'>
          <FacebookIcon className='iconSM' />
        </a>
        <a href='https://www.instagram.com/__mer__yeem/'>
          <InstagramIcon className='iconSM' />
        </a>
        <a href='https://www.instagram.com/__mer__yeem/'>
          <GitHubIcon className='iconSM' />
        </a>
        <a href='https://www.instagram.com/__mer__yeem/'>
          <WhatsAppIcon className='iconSM' />
        </a>

      </div>
    </div>
  );
}

export default Footer;
