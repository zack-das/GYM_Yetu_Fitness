import { Link } from "react-router-dom";
import "./Footer.css"

	function Footer(){
		return(
			<>
			<footer>
			<div className="footer-items">
 				<ul className="quickLinks">
 					<li> <Link className="quick-links" to="/">Join</Link></li>
 					<li> <Link className="quick-links" to="/">Locatioins</Link></li>
 					<li> <Link className="quick-links" to="/">Blogs</Link></li>
 					<li> <Link className="quick-links" to="/">Jobs</Link></li>
 					<li> <Link className="quick-links" to="/">Contact Us</Link></li>
 				</ul>
 			</div>

 			<div className="footer-items">
 				<ul className="info">
 					<li>Membership</li>
 					<li>About Us</li>
 					<li>FAQs</li>
 					<li>Community</li>
 					<li>Classes</li>
 				</ul>
 			</div>

 			<div className="footer-items">
 				<ul className="socials">
 					<li>Facebook</li>
 					<li>Twitter</li>
 					<li>Whatsapp</li>
 					<li>Telegram</li>
 					<li>TikTok</li>
 				</ul>
 			</div>
 			<div className="footer-items">
 				<ul className="address">
 					<li>Email</li>
 					<li>Phone</li>
 					<li>Map</li>
 				</ul>
 			</div>
		<div className="copyright"> <p>&copy;2025 Designed and built by Das</p></div>
		</footer>
			</>
			)

	}

export default Footer

