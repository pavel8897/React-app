import React from 'react';
import './index.css';

class Products extends React.Component {
	constructor(props) {
	  super(props);
      
	}

	render() {
		return (
			<tr>								
				<td>{this.props.name}</td>
				<td>{this.props.price}$</td>
				<td>{this.props.count}</td>
				<td>{this.props.checked ? this.props.totalCost : '0'}$</td>
				<td><img src={this.props.img} /></td>
				<td><input type="checkbox" onChange={() => this.props.checkedItem(this.props.index)} defaultChecked={this.props.checked ? 'checked' : ''} /></td>
				<td className="edit" onClick={() => this.props.deleteItem(this.props.index)}>del</td>
			</tr>
		);
	}
  }

export default Products;