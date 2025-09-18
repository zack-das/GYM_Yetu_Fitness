import React from 'react';
import "./About.css";
import gym1 from "../../assets/gym1.jpg";
import gym2 from "../../assets/gym2.jpeg";
import gym3 from "../../assets/gym3.jpg";
import gym4 from "../../assets/gym4.jpg";
import gym5 from "../../assets/gym5.jpg";
import gym6 from "../../assets/gym6.jpg";
import gym7 from "../../assets/gym7.jpg";
import gym8 from "../../assets/gym8.jpg";




function About() {
	const offers=[
		{
			title: "Iron Paradise",
			detail: "Our equipment is top-tier, ready to help you lift heavier and push harder. No excuses, just gains."
		},
		{
			title: "Expert Trainers",
			detail: "Get personalized plans and motivation from certified pros who know their stuff. They'll whip you into shape."
		},
		{
			title: "Community Vibe",
			detail: "Train alongside fellow fitness fanatics. The energy here is infectious and will keep you coming back for more."
		},
		{
			title: "Clean & Safe",
			detail: "We maintain a spotless environment so you can focus on your workout, not the germs. Your health is our priority."
		}
	]

	const images = [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8];
	return(
		<section className="about-section">
			<div className="about-us">
				<h1>Your Fitness Playground</h1>
			  <p>Experience a fitness facility designed for results. From cutting-<br/>edge equipment to expert guidance, we've got your back.</p>
			  <button>See Classes</button>	  	
			</div>
			<div className="offered">
				{offers.map((offer, index) => (
				<div key={index} className="offer-card">
					<h2>{offer.title}</h2>
					<p>{offer.detail}</p>
				</div>
		     ))}
			</div>

			<div className="gallery">
		      {images.map((src, index) => (
		        <div className="gallery-item" key={index}>
		          <img src={src} alt={`Gallery ${index + 1}`} />
		        </div>
		      ))}
    		</div>
		</section>
	)
}

export default About;