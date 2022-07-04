import "../App.css";
import headshot from "../images/headshot.jpg";

function HeaderSection() {
	return (<header className="page-header">
		<img src={headshot} className="headshot" alt="Iain Schmitt's Headshot"/>
		<h1 className="header-name">Iain Wharton Schmitt</h1> 
		<p className="footer-line"/>
  	</header>
  )
}

export default HeaderSection;