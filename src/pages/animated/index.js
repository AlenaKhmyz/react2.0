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
            <div className="page__anime"></div>
        )
    }
        
    
}
  
export default AnimatedPage