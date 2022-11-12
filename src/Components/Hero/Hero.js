import "./hero.scss"
import cartable from "../../assets/cartable.png"
import { Link } from "react-scroll";

function Hero() {
  return (
  <div className="container">
<img src={cartable} />
<Link to="result" spy={true} smooth={true} offset={50} duration={500} >
<button  >Start</button>

</Link>
    </div>
    );
}

export default Hero;
