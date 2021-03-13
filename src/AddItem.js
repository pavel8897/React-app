import React from 'react';
import './index.css';

class AddItem extends React.Component{
    constructor(props){
        super(props);
        this.name = React.createRef()
        this.price = React.createRef()
        this.count = React.createRef()
        this.img = React.createRef()
    }

    render(){
        return(
            <form onSubmit={(e)=>this.props.addItem(e, this.name, this.price, this.count, this.img)}>
                <br />
                <input ref={this.name} />
                <input ref={this.price} />
                <input ref={this.count} />
                <input ref={this.img} />
                <br />
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default AddItem;