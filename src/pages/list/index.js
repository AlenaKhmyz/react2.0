import data from '../../data.json'
import React,  {Component} from 'react'
import './styles.css'

const Userslist = (props) => {
  return (
    <div className="user-list">
      <h3>{props.name}</h3>
      <h4>{props.surname}</h4>
    </div>
  )
}

class ListPage extends Component {
  
    render () {
      console.log(data)
      return (
        <div className="page__list">
         {data.map(element => <Userslist key = {element._id} name = {element.name.first} surname = {element.name.last}/>)}
        </div>
        
      )
    }
  }
  
  export default ListPage