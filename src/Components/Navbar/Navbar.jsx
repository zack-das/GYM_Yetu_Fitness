import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  const openMenu= () => {
  const menuOpen=document.getElementById("menuOpen")
  menuOpen.style.display = 'flex';
  // document.getElementById('hamMenu').style.display='none';
}
  
const menuOut= () => {
   const menuOpen=document.getElementById("menuOpen").style.display = 'none';
   // document.getElementById('hamMenu').style.display='flex';
  // menuOpen
}

document.querySelectorAll(".list-item").forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menuOpen').style.display = 'none';
        });
})

  return (
    <nav>
      <ul>
        <li className="onDesktop" ><Link className="list-item"  to="/">Join</Link></li>
        <li className="onDesktop"><Link className="list-item"  to="/locations">Locations</Link></li>
        <li className="onDesktop"><Link className="list-item" to="/blogs">Blogs</Link></li>
        <li className="onDesktop"><Link className="list-item"  to="/jobs">Jobs</Link></li>
       <li id="push-right" className="onDesktop"><Link className="list-item" to="/contact">Contact us</Link></li>
      </ul>

     <div  className="menuhidden">
        <ul id="menuOpen" className="onMobile">
        <li id="closeMenu" onClick={menuOut} className="mobile-menu-close">
            <i className="fas fa-times"></i>
        </li>
        <li><Link className="list-item"  to="/">Join</Link></li>
        <li><Link className="list-item"  to="/locations">Locations</Link></li>
        <li><Link className="list-item" to="/blogs">Blogs</Link></li>
        <li><Link className="list-item"  to="/jobs">Jobs</Link></li>
       <li><Link className="list-item" to="/contact">Contact us</Link></li> 
      </ul>
     </div>

       <div id="hamMenu" onClick={openMenu} className="mobile-menu">
                <i className="fas fa-bars"></i>
        </div>

    </nav>

   

  );
}



export default Navbar
