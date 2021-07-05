import React,  {Component} from 'react'
import './styles.css'

class MenuPage extends React.Component{
    ingredients = [
        {text: 'pepperoni', id:'pizza'},
        {text:'pineapple', id:'fruit'},
        {text: 'cheese', id: 'cheese'}, 
        {text:'mushrooms', id: 'mushroom'}
    ]

    state = {
        list: false
    }

    changeState = () => {
       this.setState({list: !this.state.list})
    }

    render() {
        return (
            <div className="page__menu">
              
            </div>
        )
    }
        
    
}
  
export default MenuPage