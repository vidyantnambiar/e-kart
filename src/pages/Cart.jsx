import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log("===cart array===");
  console.log(cartArray);
  let totalPrice=0;
  if(cartArray.length){
    for(let i=0;i<cartArray.length;i++){
      totalPrice=totalPrice+cartArray[i].price;
    }
  }
  const handleCheckout=()=>{
    dispatch(emptyCart())
    alert("Your order is successfully placed")
    navigate('/')
  }

  return (
    <div style={{marginTop:"150px"}}>
      <div className='row w-100'>
        <div className='col-lg-6 col-md-6 m-2'>
          <table className='table shadow border ms-4'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              
              </tr>
            </thead>
            <tbody>
              {
                cartArray?.length>0?
                cartArray.map((item,index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} alt="" style={{width:"100px",height:"100px"}}/></td>
                    <td>{item.price}</td>
                    <td><Button variant='outline-danger' onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
                  </tr>
                ))

 :
  <p>No Item to display</p>
              }
            
            </tbody>
          </table>
        </div>
        <div className='col-lg-5 col-md-5 m-2'>
          <div className='col-lg-10 col-md-10 d-flex justify-content-center align-items-center flex-column'>
            <div className='border shadow p-5'>
              <h3 className='text-primary'>Cart Summary</h3>
              <h6>Total Number of Products:  <span className='fw-bolder fs-4 text-warning'>{cartArray.length}</span></h6>
              <h6>Total Price:  <span className='fw-bolder fs-4 text-warning'>{totalPrice}</span></h6>
              <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart