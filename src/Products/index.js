import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';




    
        const Products = () =>{
            const [products, setProducts] = useState([]);
            const [loading, setLoading] = useState(false);
            useEffect(() => {
                (async()=>{
                    await getProducts();
                })()
            }, [])
            console.log({products});
            const getProducts = async ()=>{
                try{
                    setLoading(true);
                    const response = await fetch('https://dummyjson.com/products')
                    const result = await response.json();
                    setProducts(result.products);
                    setLoading(false);
                }
                catch(error){
                    console.log(error.message);
                }
            }
            if (loading){
                return <h2>Loading ... </h2>
            }
            return(
                <div>
                    <h1>All Products</h1>
                    {products.map(item => (
                    <div key={item.id}>
                    <img src = {item.images[0]} alt ="product "/>
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                    <p>{item.discountPercentage}</p>
                    <Link to={`/Product/`} ><button type="submit" className="button">View</button></Link>

                   </div>
                   ))}
            </div>
            );
        };

export default Products