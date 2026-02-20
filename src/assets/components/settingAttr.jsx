import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class SettingAttr extends React.Component {
  state = {
    name: 'John',
    age: 29,
    imageURL: 'https://picsum.photos/200'
  };

  styles = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  render(){
    return(
        <div>
            <img src={this.state.imageURL} alt="" />
            {/* In Jsx we don't declare name like HTML, instead we use className */}
            {/* Include Bootstrap classes */}
            <br /><span style={{color:"red"}} className="bg bg-danger m-2">Statement</span>
            <button style={this.styles} className="btn btn-secondary btn-sm">Click Me</button>
        </div>
    )
  }
};
export default SettingAttr;

