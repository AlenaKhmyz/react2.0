import React, {Component} from 'react';
import './styles.css';

class Square extends Component {
    render() {
        return (
            <div className = {this.props.cssClass}>
                {this.props.label}
            </div>
        )
    } 
}

class PropsPage extends Component {
  render () {
    return (
      <div className="page__props">
        <Square label ='Big squere' cssClass = 'square-big' />
        <Square label ='A less squere' cssClass = 'square-less' />
        <Square label ='The smallest one' cssClass = 'square-smollest' />
      </div>
    )
  }
}

export default PropsPage