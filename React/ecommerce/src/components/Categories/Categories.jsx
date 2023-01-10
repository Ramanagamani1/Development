import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryLink from "../CategoryLink";
import { loadCategories} from "../../store/categories";
import styles from './Categories.module.css'
import ToggleCart from "../ToggleCart/ToggleCart";

function Categories() {
    const categories = useSelector(state=>state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(loadCategories());
    }, [])
    

    if(categories.isLoading) {
        return <div>Loading Categories...</div>
    } else if(categories.error) {
        return <div>Failed to load categories</div>
    } else {
        return (
            <div className={styles.root}>
                <ul className={styles.list}>
                    {categories.categories.map(category => (
                        <CategoryLink key={category.id} category={category}/>
                    ))}
                </ul>
                <ToggleCart />
         </div>
        )
    }
}

export default Categories;