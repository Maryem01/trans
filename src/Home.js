
import { BsDashLg } from "react-icons/bs";
import Navbar from "./Navbar";
const Home = () => {
  return (
   
    <div className='home_content'>
    <div className="container_nav"> <Navbar/></div>
    <div className="content_Home">
   <div className="texts">
   <div className="text_one">
  <p>Transportation Services around the World</p>
</div>
  <div className="text_trans">

  <span> TransX</span>
  
  </div>
 
<div className="text_two">
    <p>
    Rockling Devario deep sea bonefish cutthroat trout streamer fish kaluga sailback scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano bonnetmouth; blue whiting, suckermouth armored catfish luderick blackchin kingfish.
    </p>
    </div>
    <div className="btn_explore"><button>EXPLORE MORE</button></div>
    </div>
    <div className="slides">
  
  <span>01/03</span>
  <BsDashLg className="icon_slide"/> 
  <BsDashLg className="icon_slide"/> 
  <BsDashLg className="icon_slide"/> 
</div>
  
  <div className="progression">
 
<div className="track">
<p>Track you pishment</p>
</div>
</div>
</div>
    </div>
  )
}

export default Home