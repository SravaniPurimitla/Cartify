import React from 'react'
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';


const Cart = () => {
  const products=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  const removeFromCart=(id)=>{
  dispatch(remove(id))
  }
  const cards = products?.map((product) =>( 
    <div className="col-md-12 mb-4 d-flex" key={product.id}>
      <Card className="h-100 d-flex flex-column" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
        <Card.Body className="flex-grow-1">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description.substring(0, 100)}...</Card.Text>
          <Card.Text>
            <strong>Price:</strong> ${product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
));

  return (
    <>
    <div className='row'>
      {cards}
      </div>

    </>
  )
}

export default Cart