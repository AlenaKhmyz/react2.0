import React,  {Component} from 'react'
import './styles.css'

class AnimePage extends React.Component{
    state = {
        anime: false
    }

    changeState = () => {
        this.setState({anime: !this.state.anime})
    }
    

    render() {
        return (
            <div className="page__animated">
                <div className={`loader ${this.state.anime ?  'loader-animated' : ''}`}></div>
                <button onClick={this.changeState}>Load</button>
            </div>
        )
    }
}
  
export default AnimePage