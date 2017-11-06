import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quanitity: ''
    }
    this.updateDescritption = this.updateDescritption.bind(this);
    this.updateQuantity=this.updateQuantity.bind(this);
    this.add=this.add.bind(this);
  }

  updateDescritption (e) {
    this.setState({
      description: e.target.value
    })
  }

   updateQuantity (e) {
    this.setState({
      quanitity: e.target.value
    })
  }

  add () {
    
    this.props.AddGroceryItem(this.state.description, this.state.quanitity);
  }
  
  render () {
    return (
    	<div>
        Description: <input onChange={this.updateDescritption} value={this.state.description}></input>
        <br/>
        Quantity: <input onChange={this.updateQuantity} value={this.state.quanitity}></input>
        <button onClick={this.add}>AddGrocery</button>
    	</div>
    )
  }
}

export default AddGrocery;