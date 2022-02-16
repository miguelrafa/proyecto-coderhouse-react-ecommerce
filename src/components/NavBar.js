import React from 'react'
import logo from '.././img/logo2.png'


const NavBar = () => {
  return <>
 <nav className="navbar navbar-expand-lg navbar-light fixed-top navBarCustom">
	<a className="navbar-brand" href="#">
		<img src={logo} alt="" width="36" height="46" className="d-inline-block align-text-center" />
		Site de e-commerce
	</a>
	<div className="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul className="navbar-nav ml-auto">
		<li className="nav-item active">
		  	<a className="nav-link" href="#">Inicio</a>
		</li>
		<li className="nav-item active">
		  	<a className="nav-link" href="#">Productos</a>
		</li>		
		<li className="nav-item">
		  	<a className="nav-link active" href="#">Contacto</a>
		</li>
	  </ul>
	</div>
  </nav>
  </>
}

export default NavBar