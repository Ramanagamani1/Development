import React, {useState, useEffect} from 'react';
import ProductCard from '../ProductCard';



/*function getProductApi(callback) {
    setTimeout(()=>{
         callback(_products);
    },1000);
}*/

function ProductList() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)

    useEffect(()=> {
        /*getProductApi((myproducts)=> {
            // batch updating happens
            setIsLoading(false);
            setProducts(myproducts);
        }) */
        /*const promise = fetch("http://localhost:3001/products")
        promise.then(response => {
           response.json().then(data=> {
              setIsLoading(false);
              setProducts(data);
           });
        })
        promise.catch(error => {
            console.log(error)
        })

        fetch("http://localhost:3001/products")
        .then( response => { 
            return response.json() 
        })
        .then(data=> {
             setIsLoading(false);
             setProducts(data);
        }).catch(error => {
            console.log(error)
            setError(error)
        })*/
        async function loadProducts() {
            const response = await fetch("http://localhost:3001/products");
            const result = await response.json();
            setIsLoading(false);
            setProducts(result);
        }
        loadProducts();
    }, []);

    if (error) {
        return <div>Something went wrong...</div>
    }
    else if (isLoading) {
        return <div>Loading...</div>
    }
    else {
            return (
                <div>
                {
                    products.map(item => {
                        return <ProductCard item={item}/>
                    })
                }
                </div>
            )
    }
}

export default ProductList;