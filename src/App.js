import React from 'react';
import './index.css';
import Product from './Product';
import AddItem from './AddItem';
import Cost from './Cost';

class App extends React.Component {
	constructor(props) {
	  super(props);

	    this.state = {
			products: [ 
				{name: 'tomato', price: 25, count: 17, img: 'https://a.deviantart.net/avatars/k/r/kruko.jpg?1606271615', check: true},
				{name: 'potato', price: 16, count: 24, img: 'https://ww.tlc.org.pl/download/file.php?avatar=497_1389118285.png', check: true},
				{name: 'mango', price: 30, count: 12, img: 'https://sun1-88.userapi.com/impf/c857216/v857216346/453df/j1I7Vb6Dgug.jpg?size=50x0&quality=88&crop=0,0,600,600&sign=1e63822b95b5db3c9d7567c9d8e4d9dd&ava=1', check: true},
				{name: 'vodka', price: 40, count: 4, img: 'https://img.zhiribao.com/upload/images/201911/9/931a2b5fa0ff11ac3776d8dcc0f5e4e7b928666f.jpg!50_50.jpg', check: true}
			], cost: ''
		}
	}

	deleteItem(index){
		this.state.products.splice(index, 1)
		this.setState({products: this.state.products})
	}

	addItem(e, val1, val2, val3, val4){
		e.preventDefault()
		let newItem = {
			name: val1.current.value,
			price: val2.current.value,
			count: val3.current.value,
			img: val4.current.value
		}
		this.state.products.push(newItem)
		this.setState({products: this.state.products})
	}

	
	checkedItem(index){
		this.state.products[index].check = !this.state.products[index].check
		this.setState({products : this.state.products})
	}

	render() {
		const products = this.state.products.map((product, index)=>{
			return <Product
				   	name = {product.name}
					price = {product.price}
					count = {product.count}
					totalCost = {product.price*product.count}
					img = {product.img}
					checked = {product.check}
					key = {index}
					index = {index}
					deleteItem = {this.deleteItem.bind(this)}
					checkedItem = {this.checkedItem.bind(this)}
				   />
		})
		
		return (
			<div>
				<table>
					<tbody>
						<tr className="title_table">
							<td>Name</td>
							<td>Price</td>
							<td>Count</td>
							<td>Total cost</td>
							<td>Image</td>
							<td>Checked</td>
							<td>Delete</td>
						</tr>
						{products}
					</tbody>
				</table>
				<Cost
					products={this.state.products}
				/>
				<AddItem
					addItem={this.addItem.bind(this)}
				/>
			</div>		
		);
	}
  }

export default App;