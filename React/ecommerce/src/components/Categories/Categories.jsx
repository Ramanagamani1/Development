import React from "react";
import { useSelector } from "react-redux";

function Categories() {
    const categories = useSelector(state=>state.categories);

    if(categories.isLoading) {
        return <div>Loading Categories...</div>
    } else if(categories.error) {
        return <div>Failed to load categories</div>
    } else {
        return (
            <ul>
                {categories.categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        )
    }
}

export default Categories;