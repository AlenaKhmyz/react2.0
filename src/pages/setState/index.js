import React, {Component} from 'react';
import './styles.css';

class SetStatePage extends Component {
  state = {
    italic : false
  } 

  changeText = () => this.state.italic ? this.setState({italic: false}) : this.setState({italic: true})

  render () {
    return (
      <div className="page__state">
        <p onClick = {this.changeText} className = {this.state.italic === true ? 'italic-text' : 'state-text'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book.</p>
      </div>
      
    )
  }
}

export default SetStatePage