import React from 'react';
import "./About.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import gym1 from "../../assets/gym1.jpg";
import gym2 from "../../assets/gym2.jpeg";
import gym3 from "../../assets/gym3.jpg";
import gym4 from "../../assets/gym4.jpg";
import gym5 from "../../assets/gym5.jpg";
import gym6 from "../../assets/gym6.jpg";
import gym7 from "../../assets/gym7.jpg";
import gym8 from "../../assets/gym8.jpg";

import pic1 from "../../assets/Emily S.jpeg"
import pic2 from "../../assets/DAvid P..jpeg"
import pic3 from "../../assets/Sarah K.jpeg"
import pic4 from  "../../assets/Mike R..jpeg"
import pic5 from "../../assets/Jessica L.jpeg"


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

	const members =[
		{
			name: "Emily S.",
			image: pic1,
			review: "From beginner to advanced, everyone is welcomed and supported. It's the best fitness investment I've made.",
		},
		{
			name: "David P.",
			image: pic2,
			review: "This gym is a game-changer! I've never felt stronger or more motivated. The trainers are incredible!",
		},{
			name: "Sarah K",
			image: pic3,
			review: "Finally, a gym that feels like a community. The atmosphere is electric, and the results speak for themselves.",
		},{
			name: "Mike R",
			image: pic4,
			review: "The equipment is always clean and available. I can get my workout in without waiting.",
		},{
			name: "Jessica L",
			image: pic5,
			review: "Finally, a gym that feels like a community. The atmosphere is electric, and the results speak for themselves."
		},
	]

	 const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
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

    		<div className="testimonials-section py-12 bg-[#f8f9fa]">
  <div id="reviews" className="container mx-auto px-4">
    <h2>Happy Members</h2>
    <h1>Who We Serve</h1>
    
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={4000}
      keyBoardControl
      showDots={true}
      arrows={true}
      containerClass="carousel-container"
      itemClass="carousel-item px-3"
      customLeftArrow={
        <button className="custom-arrow left">
          <i className="fas fa-chevron-left"></i>
        </button>
      }
      customRightArrow={
        <button className="custom-arrow right">
          <i className="fas fa-chevron-right"></i>
        </button>
      }
      dotListClass="custom-dots"
    >
      {members.map((member, index) => (
        <div key={index} className="testimonial-card">
          <p className="testimonial-text">"{member.review}"</p>
          <div className="reviewer-info">
            <img
              src={member.image}
              alt={member.name}
              className="reviewer-image"
            />
            <span className="reviewer-name">{member.name}</span>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
</div>
		</section>
	)
}

export default About;