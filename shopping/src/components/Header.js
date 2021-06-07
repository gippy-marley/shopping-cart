import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className="container center row">
     
       <Link to="/"> <h1>ARTSY.co</h1> </Link> 
       
     <div className=" hide row">
       <Link to="/"> 
       <li>Home</li>
       </Link>
       
       <Link to="/about"> 
       <li>About</li>
       </Link>

       <a href="/#">Contact</a>    
     </div>
     <div className="hide">
       signup
     </div>
     <button className="menu">Menu</button>
    </div>
  );
}

export default Header;
