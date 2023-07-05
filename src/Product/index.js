import React,{useState,useEffect} from "react";


    
        const Product = () =>{
            const [product, setProduct] = useState([]);
            const [loading, setLoading] = useState(false);
            useEffect(() => {
                (async()=>{
                    await getProduct();
                })()
            }, [])
            console.log({product});
            const getProduct = async ()=>{
                try{
                    setLoading(true);
                    const response = await fetch('https://dummyjson.com/products/1')
                    const result = await response.json();
                    setProduct(result.product);
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
                    <h1>Product</h1>
                    {product.map(item => (
                    <div key={item.id}>
                        <img src = {item.images} alt ="product "/>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.brand}</p>
                    <p>{item.price}</p>
                    <p>{item.discountPercentage}</p>
                    <p>{item.rating}</p>
                    <p>{item.stock}</p>

                   </div>
                   ))}
            </div>
            );
        };

export default Product