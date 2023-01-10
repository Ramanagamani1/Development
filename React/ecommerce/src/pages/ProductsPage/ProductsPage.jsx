import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import ProductList from "../../components/ProductList";

function ProductsPage() {
    const params  = useParams();
    return (
        <div>
            <Categories/>
            <ProductList categoryId = {params.categoryId}/>
        </div>
    )
}

export default ProductsPage;