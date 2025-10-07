import React from 'react';
import "./Home.css"
import About from "../About/About"


function Home() {
	return(
		<>
		<section className="home-section">
			<div className="hero"
  style={{
   backgroundImage: 'url("/gym-room.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
				<div className="hero-container">
					<h1>Sweat.Smile. Repeat.</h1>
				<p>Transform your body and mind.<br/> We're not just a gym; we're your launchpad to a stronger,<br/> healthier you. Get ready to crush your goals!</p>

				<div className="hero-cta">
					<button>Get Started</button>
				</div>
				</div>
			</div>
		</section> 
		<About/>

		</>
			)
}

export default Home;