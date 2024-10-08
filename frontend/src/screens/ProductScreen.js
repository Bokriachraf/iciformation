import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch,useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    const {id} = useParams();   
    const productId = id;
    const dispatch=useDispatch();
    const productDetails = useSelector((state)=>
    state.productDetails);
    const {loading, error, product}=productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId))
      },[dispatch,productId])
  
    return (
        <div>
          {loading?(
            <LoadingBox></LoadingBox>
          ): error?(
            <MessageBox></MessageBox>
          ):(
            <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
                <div className='col-2'>
                {console.log(product.image)}
                    <img className='large' src={product.image} alt={product.name} />
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} />
                        </li>
                        <li>Price: ${product.price}</li>
                        <li>Description: <p>{product.description}</p></li>
                    </ul>
                </div>  
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Price</div>
                                    <div className='price'>${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Status</div>
                                    <div>
                                        {product.CountInStock > 0 ? (
                                            <span className='success'>In stock</span>
                                        ) : (
                                            <span className='error'>Unavailable</span>
                                        )}
                                    </div>  
                                </div>
                            </li>
                            <li>
                                <button className='primary block'>
                                    Add to cart
                                </button>
                            </li>
                        </ul>
                    </div>       
                </div> 
                </div>
                </div>
          )} 
           
        </div>
    );
}