import React, {Component} from 'react';
import './styles.css';

import initial from './img/initial.png'
import process from './img/process.png'
import ok from './img/ok.png'

class PlayerPage extends Component {
  state = {
    play: initial
  } 

    changeState = () => {
        if (this.state.play === initial) {
            this.setState({play: process})
        } else if (this.setState({play: process})) {
            this.setState({play: ok})
        } else if (this.setState({play: ok})) {
            this.setState({play: initial})
        }
    } 

    render () {
        return (
        <div className="page__player">
            <div onClick = {this.changeState} className = 'play'>
                <img src={this.state.play} alt = 'img'/>
            </div>
        </div>
        
        )
    }
}

export default PlayerPage