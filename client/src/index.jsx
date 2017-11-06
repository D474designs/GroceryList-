import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import GroceryList from './GroceryList.jsx';
import AddGrocery from './AddGrocery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
    	list: []
    }
   this.AddGroceryItem =this.AddGroceryItem.bind(this);
   this.getGroceries = this.getGroceries.bind(this);
  }

  componentDidMount() {
    getGroceries ();
  }

  AddGroceryItem (description, quantity) {
    console.log('des', description );
    $.ajax({
      url:'/groceries',
      type: "POST",
      contentType: 'application/json',
      data: JSON.stringify({
        description: description,
        quantity: quantity
      }),
      success: (data)=> {
        this.getGroceries();
      },
      error: (xhr,status,error) => {
        console.log('err',xhr,status,error);
      }
    })
  }

  getGroceries(){
    $.ajax({
      url:'/groceries',
      type:"GET",
      success: (data) => {
        this.setState({
          list: data
        });
      },
      error: (xhr, err) => {
        console.log('err', err);
      }


    })
  }

   componentDidMount() {
    this.getGroceries();
  }
  
  render () {
    return (
    	<div>
    	<h1>Grocery List</h1>
    	
    	<AddGrocery AddGroceryItem={this.AddGroceryItem}/>
    	<GroceryList list={this.state.list}/>
    	</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));