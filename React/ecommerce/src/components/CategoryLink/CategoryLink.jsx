import React, {memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from './CategoryLink.module.css';

function CategoryLink({category}) {

    const dispatch = useDispatch();
    const isSelected = useSelector(state => state.categories.selectedCategoryId === category.id)

    function handleCategorySelection() {
        dispatch({
            type: 'SET_SELECTED_CATEGORY',
            payload: category.id
        });
    }

    return (
        // <li className={`${styles.link} ${ isSelected ? styles.selected : ''}`} 
        // onClick={handleCategorySelection}>{category.name}</li>
        <li>
            <NavLink 
                className={styles.link} 
                to={`/categories/${category.id}`}
                activeClassName={styles.linkActive}
            >
                {category.name}
            </NavLink>
        </li>
    )
}

export default memo(CategoryLink);