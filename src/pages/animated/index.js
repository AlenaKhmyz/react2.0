import React,  {Component} from 'react'
import './styles.css'

class AnimatedPage extends React.Component{
    state = {
        anime: false
    }

    changeState = () => {
        this.state.anime ? this.setState({anime: false}) : this.setState({anime: true})
    }

    render() {
        return (
            <div className="page__animated">
                {this.state.anime ? <button className="loader" onClick={this.changeState}/> : <button className="animated-btn" onClick={this.changeState}>Loader</button> }
            </div>
        )
    }
        
    
}
  
export default AnimatedPage