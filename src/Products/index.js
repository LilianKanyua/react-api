import React,{useState,useEffect} from "react";

import { useEffect } from "react";

    const [products,setProducts] = useState ('[]]')
    const [loading,setLoading] = useState(false)
    useEffect (() =>{
        
        },[])
        

    
    const getProducts = async () =>{
        try {   setLoading(true);
                const response =await fetch ('https://dummyjson.com/products')
                const result = await response.json()



                setProducts (result.products);
                setLoading =(false)
                
        }
        catch(error){
            console.log(error.message)
        }
    }
    if (loading){
        return <h2>Loading ...</h2>
    }
    
    
    return(
 

    <div>
        <h1>All products</h1>
        {products.map(item =>(

            <div>
            <h2>items,title</h2>
            </div>
        ))}
    </div>
    )


export default Products