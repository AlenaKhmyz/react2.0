import React,  {Component} from 'react'
import './styles.css'

class AnimePage extends React.Component{
    state = {
        anime: false
    }

    changeState = () => {
        this.state.anime ? this.setState({anime: false}) : this.setState({anime: true})
    }

    onClick = () => {
        if (this.state.anime === false) {
            return (
                <button className="animated-btn" onClick={this.changeState}>Loader</button>
            )
        } else if (this.state.anime === false) {
            return (
                <button className="loader loader-animated" onClick={this.changeState}/>
            )
        } else if {
            
        }
    }

    render() {
        return (
            <div className="page__animated">
                {this.state.anime ? <button className="loader loader-animated" onClick={this.changeState}/> : <button className="animated-btn" onClick={this.changeState}>Loader</button> }
            </div>
        )
    }
        
    
}
  
export default AnimePage