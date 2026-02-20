import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class renderingCls extends React.Component {
    state = {
        count: 0,
    };
    
    
    render() {
        let classes = "badge m-2";
        classes += this.state.count === 0 ? " bg-warning" : " bg-primary";
        
        return (
            <div>
                <h1 className={classes}>{this.state.count}</h1>
            </div>
        );
    }
}
export default renderingCls;