import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import './style.css';


    
const Product = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
      const details = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/product/${productId}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error(error);
        }
      };
      details();
    }, [productId]);
    if (!product) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <h1>Product Details</h1>
        <div>
          <img src={product.thumbnail} alt={product.title} />
          <p>Title: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>
    );
  };
 
export default Product