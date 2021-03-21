import React from 'react';

const Result = (props) => {
    const pay = props.users.reduce((sum, item) => sum + (item.workDay * item.pay), 0)
    return(
        <div>
            Cost: {pay}$
        </div>
    )
}

export default Result;