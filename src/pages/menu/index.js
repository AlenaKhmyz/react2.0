import React,  {Component} from 'react'
import './styles.css'

const ingredients = ['pepperoni','pineapple', 'cheese', 'mushrooms']


class CountIngridients extends React.Component {
    state = {
        count: 0
    }

    onAddCount = () => {
        this.setState({count: this.state.count + 1})
        this.props.sum(1) 
    }
    onDeleteCount = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1}) 
            this.props.sum(-1)
        }
        else
            this.setState({count: 0})
    }

    render () {
        return (<span>
            <button onClick={this.onDeleteCount}>-</button>
            <span>{this.state.count}</span>
            <button onClick ={this.onAddCount}>+</button>
        </span>)
    }
}


class MenuPage extends React.Component{
    
    state = {
        list: false,
        endingCount: 0
    }

    onShowItem = () => this.setState({list: !this.state.list})

    plusCount = (number) =>  this.setState({endingCount: this.state.endingCount + number})

    render() {
        return (
            this.state.list ? (
                <div className ={this.props.direction }> 
                <button onClick = {this.onShowItem} style = {{width: '300px'}}>Close▲</button>
                    <ul>
                        {ingredients.map( item => <li><span>{item} <CountIngridients sum={this.plusCount} /></span></li>)}
                    </ul>
                    <div>{this.state.finalCount}</div>
                </div>
               )
               :
               <button onClick = {this.onShowItem} style = {{width: '300px'}}>Ingredients▼</button>
        )
    }
        
    
}
  
export default MenuPage