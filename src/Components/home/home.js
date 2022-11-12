import "./home.scss"
import gsap, { TweenMax , Power3  ,TimelineLite} from "gsap";
import cartable from "../../assets/cartable.png"
import { useRef } from "react";
import { useEffect } from "react";

function Home() {
    let homePage = useRef()
    let p1 = useRef()
    let p2 = useRef()
    let top = useRef()
    let bottom = useRef()
    let tl = gsap.timeline()

    useEffect(()=>{
tl
.to( homePage , 2, {height:0,opacity:0},3.5)
.from( p1 , 2, { left:'-800px' },.5)
.from( p2 ,2, { right:'-800px' ,  opacity:0 ,ease: "power3.inOut",},.7)
//.to( top , .5, { left:'-100%' },1)
//.to( bottom , .5, { right:'-100%' ,  opacity:0 ,ease: "power3.inOut",},1)

    },[])
  return (
  <div ref={el=>{homePage=el}} name="hero" className="container_home">
<div>
    
    <p ref={el=>{p1=el}}  > TP 1 : PROGRAMMATION DYNAMIQUE TPRO</p>
   <p ref={el=>{p2=el}} >Probleme de sac a dos</p>
    
</div>

    </div>
    );
}

export default Home;
