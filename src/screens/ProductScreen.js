import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import Rating from '../components/Rating';


export default function ProductScreen(props) {
const product= data.products.find((x)=>x._id===props.match.params.id)
    return (
        <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
             <div className='col'>
               <img className='large' src={product.image} alt={product.name}>
               </img>
             </div>

            </div>
        </div>
    )

}