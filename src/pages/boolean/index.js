import React, {Component} from 'react';
import './styles.css';

class BooleanPage extends Component {
  state = {
    isSignedIn: false
  } 

  changeState = () => setTimeout( () => this.setState({isSignedIn: !this.state.isSignedIn}), 3000 )

  render () {
    return (
        this.state.isSignedIn ? <p>Hello user</p> : <button onClick={this.changeState} className="boolean__button">Signed in</button>  
    )
  }
}

export default BooleanPage