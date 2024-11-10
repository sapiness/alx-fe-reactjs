import { Link } from "react-router-dom";

const Navbar = () => {
   return (
<nav className="Navbar">
   
    <div className="links" style={{ backgroundColor: 'grey', display: 'Flex', justifyContent: 'Center' }}>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Services">Services</Link>
    <Link to="/Contact">Contact</Link>
    </div>
</nav>
   );
}
export default Navbar;