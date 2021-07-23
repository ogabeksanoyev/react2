import './Header.css';
import logo from '../../logo.svg';
import logo1 from '../../image/download.svg'
import React from 'react';

class Header extends React.Component{
    render(){
      return <div className="">
      <header className="py-3">
      <div className="container">
     <div className="d-flex align-items-center justify-content-between">
       <div className="logo">
          <img src={logo} alt="" />
       </div>
     <div className="header_ul d-none d-md-block">
       <ul className="nav">
         <li className="me-4"><a href="#">Features</a></li>
         <li className="me-4"><a href="#">Get started</a></li>
         <li className="me-4"><a href="#">Community</a></li>
         <li className="me-4"><a href="#">Blog</a></li>
         <li className="me-4"><a href="#">Enterprice</a></li>
         <li className="me-4"><a href="#">Pricing</a></li>
         <li className="me-4"><a href="#">Free trial</a></li>
       </ul>
     </div>
     <div className=" d-block d-md-none">
      <a href="#" className="me-3 menu_btn"> <img  src="http://miraman.uz/icons/search.svg" alt="" /></a>
      <a href="#" className="shopp me-5 menu_btn"><img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" alt="" /></a>
     <a href="#" className="menu_btn btnx"><img src={logo1} alt="" /></a>
     </div>
     </div>
      </div>
     </header>
     </div>
    }
   
  }
  export default Header; 

 