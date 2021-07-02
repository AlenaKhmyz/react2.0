import React, {Component} from 'react';
import './styles.css';

class CheckboxPage extends Component {
  state = {
    checkbox: 'X'
  } 

 changeState = () => this.state.checkbox === 'X'? this.setState({checkbox: 'V'}) : this.setState({checkbox: 'X'})

  render () {
    return (
      <div className="page__checkbox">
        <p onClick = {this.changeState} className = 'checkbox'>{this.state.checkbox}</p>
      </div>
      
    )
  }
}

export default CheckboxPage