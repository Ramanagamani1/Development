import React, {useState, useEffect,memo} from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.css';


/*function getProductApi(callback) {
    setTimeout(()=>{
         callback(_products);
    },1000);
}*/

function ProductList({categoryId}) {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)

    //const selectedCategoryId = useSelector(state=>state.categories.selectedCategoryId)

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
        try {
            async function loadProducts() {
                const response = await fetch(`http://localhost:3001/categories/${categoryId}/products`);
                const result = await response.json();
                setIsLoading(false);
                setProducts(result);
            }
            if (!categoryId) return;
            loadProducts();
        }
        catch(error) {
            setError(error)
        }
        
    }, [categoryId]);

    if (!categoryId) {
         return <div>Select a category</div>
    }

    if (error) {
        return <div>Something went wrong...</div>
    }
    else if (isLoading) {
        return <div>Loading...</div>
    }
    else if (products.length > 0) {
   
            return (
                <div className={styles.list}>
                {
                    products.map(item => {
                        return (
                          <ProductCard 
                            key= {item.id} 
                            product= {item}
                            />
                        )
                    })
                }
                </div>
            )
    } else {
        return <div>No products found.Try different category!</div>
    }
}

// export default ProductList;
export default memo(ProductList);