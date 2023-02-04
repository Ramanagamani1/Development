import React,{useState,useEffect} from "react";
import styles from './OrderList.module.css';

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=> {
        async function loadOrders() {
           try {
           
                const response = await fetch(`http://localhost:3001/orders?_sort=id&_order=desc`);
                const result = await response.json();
                setIsLoading(false);
                setOrders(result);
            } catch(error) {
                setError(error)
            }   
        }        
        loadOrders();
        
    }, []);

    console.log(orders)
    if (error) {
        return <div>{error.message}</div>
    }
    else if (isLoading) {
        return <div>Loading...</div>
    }
    else if (orders.length > 0) {
   
            return (
                <div className={styles.list}>
                {
                    orders.map(order => {
                        return (<div key={order.id} className={styles.order}>
                            <div>Order #{order.id}</div>
                            <div>
                                {
                                  order.products.map(product=> `${product.title} X ${product.quantity}`)
                                  .join(", ")
                                }
                            </div>
                        </div>
                        )
                    })
                }
                </div>
            )
    } else {
        return <div>No orders found.Place an order now!</div>
    }

}

export default OrderList;