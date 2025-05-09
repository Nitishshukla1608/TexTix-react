import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (<>    <nav
    className={`navbar navbar-expand-lg navbar-dark bg-dark`}
    
  >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/textform"><b>{props.title}</b></Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/textform">Home</Link>
         
        </li>
        <li className="nav-item">
          <Link className="nav-linkb active" to="/about">{props.aboutUs}</Link>
         
        </li>
        
      </ul>

      <div className="d-flex">

        <div onClick={()=>{props.toggleMode('primary')}} className='bg-primary rounded mx-2'style={{height:"30px", width:"30px" , cursor:"pointer"} }>
        </div>
        <div onClick={()=>{props.toggleMode('danger')}} className='bg-danger rounded mx-2'style={{height:"30px", width:"30px",  cursor:"pointer"} }>
        </div>
        <div onClick={()=>{props.toggleMode('success')}} className='bg-success rounded mx-2'style={{height:"30px", width:"30px" , cursor:"pointer"} }>
        </div>
        <div onClick={()=>{props.toggleMode('warning')}} className='bg-warning rounded mx-2'style={{height:"30px", width:"30px" , cursor:"pointer"} }>
        </div>
        <div onClick={()=>{props.toggleMode('dark')}} className='bg-dark rounded mx-2'style={{height:"30px", width:"30px" , cursor:"pointer"} }>
        </div>
        <div onClick={()=>{props.toggleMode('light')}} className='bg-light rounded mx-2'style={{height:"30px", width:"30px" , cursor:"pointer"} }>
        </div>


      </div>





      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
  
    </div>
  </div>
</nav>
</>

  )
}

// Navar.propTypes = {title : PropTypes.string.isRequired,
//     aboutUs : PropTypes.string, 
// }        // KISI PROPS KA DATATYPE BATAANE KE LIYE HAM PROPSTYPES KA USE KARTE HAIN..



// Navbar.defaultProps={
//     title:'LOOM',
//     aboutUs : "About us",

// }     ISKI MADAT SE HAM PROPS KI DEFAULT VALUES KO SET KAR SKTE HAIN AGAR PROPS KI KUCHH VALUE NHI DI TO DEFAULT MEIN YE RELOAD HOGA..


