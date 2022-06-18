import React from 'react'
import { useParams} from 'react-router'
import {getItems} from '../dummy/index'
import AddRemoveButton from '../UI/AddRemoveButton';

function Items(props) {
 const {categoryId} = useParams();
 const items = getItems(parseInt(categoryId))

  return (
    <div className='category-items'>
        {items.map(item => {
            return (
            
            <div key={item.id} className='category-item'>
                <img className='category-item-poster' src={item.poster} alt="poster"/>
                <div className="category-item-details">
                    <div className='category-item-title'>{item.name}</div>
                    <div className='category-item-purchase'>
                    <span>₹{item.price}</span>
                    <AddRemoveButton item={item} />
                </div>
                </div>
            </div>
        
        )
        })}
    </div>
  )
}

export default Items;