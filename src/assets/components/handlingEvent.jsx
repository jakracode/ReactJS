import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class HandlingEve extends React.Component{
    states = {
        count: 0,
    };

    handleIncrement(){
        console.log('Button Clicked');
    }

    render(){
        return(
            <div>
                <button onClick={this.handleIncrement()} className='btn btn-secondary btn-sm'>Click</button>
            </div>
        )
    }
};

export default HandlingEve;