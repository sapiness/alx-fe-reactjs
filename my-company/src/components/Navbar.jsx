import { Link } from "react-router-dom";

const Navbar = () => {
   return (
<nav className="Navbar">
   
    <div className="links" style={{ backgroundColor: 'violet', display: 'Flex', justifyContent: 'Center' }}>
    <Link to="/" style={{paddingRight: '10px'}}>Home</Link>
    <Link to="/About" style={{paddingRight: '10px'}}>About</Link>
    <Link to="/Services" style={{paddingRight: '10px'}}>Services</Link>
    <Link to="/Contact">Contact</Link>
    </div>
</nav>
   );
}
export default Navbar;