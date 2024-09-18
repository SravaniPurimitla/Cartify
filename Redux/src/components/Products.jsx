import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch,useSelector} from 'react-redux'
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import  Alert  from 'react-bootstrap/Alert';
const Products = () => {
  const dispatch=useDispatch();
  const {data:products,status}=useSelector(state=>state.products)
  useEffect(() => {
    dispatch(getProducts())
  }, []);
  if(status=='Loading'){
    return <p>Loading!...</p>
  }
  if(status=='error'){
    return <Alert key='danger'variant="danger">
      OOps Something went Wrong!..Try Again Later
      </Alert>
  }

  
  const addToCart=(product)=>{
dispatch(add(product))
  }
  const cards = products.map((product) =>( 
      <div className="col-md-3 mb-4 d-flex" key={product.id}>
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
            <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
          </Card.Footer>
        </Card>
      </div>
  ));

  return (
    <>
      <h1>Products</h1>
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Products;
