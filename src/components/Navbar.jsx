import {Link} from 'react-router-dom'
const Navbar =() =>{
    return ( 
        <nav className="d-flex bg-light p-5">
  <div className="container-fluid">
    <Link to={'/'}><a className="navbar-brand" href="#">Home</a></Link>
    
  </div>
  <div className="container-fluid">
    
    <Link to={'ShoppingCart'}><a className="navbar-brand" href="#">Cart</a></Link>
  </div>
</nav>
     );
}

export default Navbar;