import React,  {Component} from 'react'
import './styles.css'

const AnimatedPage = (props) => {
  return (
    props.start ? <div className="loader loader-animated"/> : <div>Load</div>
  )
}
  
export default AnimatedPage