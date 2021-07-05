import React,  {Component} from 'react'
import './styles.css'

class DropDownPage extends React.Component{
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
            <div className="page__drop-down">
               <button onClick={this.changeState} className="drop-down__btn">
                    Ingredients
                    {this.state.list ? '▲' : '▼'}
               </button>

               {this.state.list && this.ingredients.map((item) => {
                return <div key={item.id}>{item.text}</div>
            })}
            </div>
        )
    }
        
    
}
  
export default DropDownPage