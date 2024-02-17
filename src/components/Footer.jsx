import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className='d-flex align-items-center justify-content-evenly w-100 mb-5 mt-5 bg-primary text-light'
    style={{width:"100%",height:"300px"}}>
      <div style={{ width: "400px" }}>
        <h4>
          <i class="fa-solid fa-cart-shopping me-3"></i>E-KART</h4>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius suscipit
          eveniet placeat pariatur expedita dignissimos provident autem minima explicabo sequi minus
          iure similique commodi in fuga cumque, esse nihil rerum.</h6>
      </div>
      <div>
        <h4 >Links</h4>
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}> <h6>Home</h6></Link>
       <Link to={'/wishlist'} style={{textDecoration:"none",color:"white"}}><h6>Wish List</h6></Link>
       <Link to={'/cart'} style={{textDecoration:"none",color:"white"}}><h6>Cart</h6></Link>
        
        
      </div>

      <div>
        <h4>Guides</h4>
        <h6>React</h6>
        <h6>ReactBootstrap</h6>
        <h6>Bootswatch</h6>
      </div>
      <div>
        <h4>Contact Us</h4>
        <div className='d-flex'>
          <input className='form-control' type="text" name='' id='' placeholder='Enter your email' />
          <button className='btn btn-warning ms-2'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-evenly mt-5'>
        <i class="fa-brands fa-instagram fa-xl"></i>
        <i class="fa-brands fa-twitter fa-xl"></i>
        <i class="fa-brands fa-linkedin fa-xl"></i>
        <i class="fa-brands fa-facebook fa-xl"></i>
        </div>
      </div>
    </div>
    <div className='text-center'>
      <p>Copyright &#169; 2023. E Kart built with React and redux</p>
    </div>

  </>
  )
}

export default Footer