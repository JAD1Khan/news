import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiSearch } from "react-icons/fi/index.esm";
import {FaTelegramPlane} from "react-icons/fa/index.esm"
import {FaInstagram} from "react-icons/fa/index.esm"
import {FaFacebook} from "react-icons/fa/index.esm"
import {FaYoutube} from "react-icons/fa/index.esm"
import {FaWhatsapp} from "react-icons/fa/index.esm"
import 'bootstrap/dist/css/bootstrap.min.css';




function navbar() {
  return (
    <>    
         <Navbar collapseOnSelect expand="lg"  variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
       

       
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link nav-hover" to='/'>صفحه اصلی</Link>
            <Link className="nav-link nav-hover" to='/Motherly'>مادرانه</Link>
            <Link className="nav-link nav-hover" href="#pricing">نوزاد</Link>
            <Link className="nav-link nav-hover" href="#pricing">کودک</Link>
            <Link className="nav-link nav-hover" href="#pricing">نوجوان</Link>
            <NavDropdown title="معلم" id="collasible-nav-dropdown">
              <Link className="dropdown-item nav-hover" href="#action/3.1">رشد</Link>
              <Link className="dropdown-item nav-hover" href="#action/3.2">
                آموزش
              </Link>
              <Link className="dropdown-item nav-hover" href="#action/3.3">تربیت</Link>
              
             
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className="nav-link nav-hover"  href="#deets">موسسه المهدی</Link>
            <Link className="nav-link nav-hover"  href="#memes">شبکه شهاب</Link>
            <NavDropdown title="چند رسانه ای" id="collasible-nav-dropdown">
              <Link className="dropdown-item nav-hover" to='film'>فیلم</Link>
              <Link className="dropdown-item nav-hover" href="#action/3.2">
               سریال
              </Link>
           
            </NavDropdown>
            <Link className="nav-link nav-hover" href="#contact-us">ارتباط با ما</Link>

          </Nav>
         
        </Navbar.Collapse> */}
        
        <InputGroup className="serach-box">
       
        <Form.Control placeholder="جست و جو ..."
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
         <Button variant="outline-secondary" id="button-addon1">
          <FiSearch/>
        </Button>
      </InputGroup>
      <div className="container-btn-login&signUp">
        <Link to='/SignUp' className="signUp" variant="success"> ثبت نام</Link >
        <Link to='/Login' className="login" variant="outline-secondary"> ورود</Link >
      </div>
      </Container>
    </Navbar>


         <Navbar collapseOnSelect expand="lg"  variant="dark" >
      <Container className="container-menu">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link nav-hover" to='/'>صفحه اصلی</Link>
            <Link className="nav-link nav-hover" to='/Motherly'>مادرانه</Link>
            <Link className="nav-link nav-hover" to='/Baby'>نوزاد</Link>
            <Link className="nav-link nav-hover" href="#pricing">کودک</Link>
            <Link className="nav-link nav-hover" href="#pricing">نوجوان</Link>
            <NavDropdown title="معلم" id="collasible-nav-dropdown">
              <Link className="dropdown-item nav-hover" href="#action/3.1">رشد</Link>
              <Link className="dropdown-item nav-hover" href="#action/3.2">
                آموزش
              </Link>
              <Link className="dropdown-item nav-hover" href="#action/3.3">تربیت</Link>
              
             
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className="nav-link nav-hover"  href="#deets">موسسه المهدی</Link>
            <Link className="nav-link nav-hover"  href="#memes">شبکه شهاب</Link>
            <NavDropdown title="چند رسانه ای" id="collasible-nav-dropdown2">
              <Link className="dropdown-item nav-hover" to='film'>فیلم</Link>
              <Link className="dropdown-item nav-hover" href="#action/3.3"> عکس </Link>
              <Link className="dropdown-item nav-hover" href="#action/3.3"> اینفوگرافیک </Link>
              <Link className="dropdown-item nav-hover" href="#action/3.3"> صوت </Link>
              <Link className="dropdown-item nav-hover" href="#action/3.3"> کتاب </Link>
              <Link className="dropdown-item nav-hover" href="#action/3.3"> پخش زنده </Link>
           
            </NavDropdown>
            <Link className="nav-link nav-hover" href="#contact-us">ارتباط با ما</Link>

          </Nav>
         
        </Navbar.Collapse> 
        <div className="container-icon-navbar">
          <FaWhatsapp className='icon-navbar'/>
          <FaFacebook className='icon-navbar'/>
          <FaYoutube className='icon-navbar'/>
          <FaInstagram className='icon-navbar'/>
          <FaTelegramPlane className='icon-navbar'/>
          
          
        </div>
      </Container>
    </Navbar>
    
      {/* <Link to="/home">Home </Link>

      <Link to="/about">About Us </Link>

      <Link to="/Banner">Banner</Link> */}
    </>
  );
}



export default navbar;
