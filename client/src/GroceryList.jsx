import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
	<div className="groceries">
	{console.log(props.list)}

	{props.list.map((item,i)=>
		<GroceryItem item={item} key={i}/>
	)}
	</div>

	);

export default GroceryList;