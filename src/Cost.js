import React from 'react';
import './index.css';

class Cost extends React.Component{
    constructor(props){
        super()

    }
    
    render(){
        const commonCost = this.props.products.reduce((sum, item) => sum + (item.price * item.count), 0 )
        return(
            <div>
                Total cost: {commonCost}$
            </div>
        )
    }
}

export default Cost;