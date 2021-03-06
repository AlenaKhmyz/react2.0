import React,  {Component} from 'react'
import './styles.css'

class Button extends React.Component{
    render() {
        return (
            <button onClick={this.props.click} className="btn">{this.props.label}</button>
        )
    }
}


class ModificationPage extends React.Component{
    state = {
        num: 0
    }

    changePlus = () => {
        this.setState({num: this.state.num + 1})
    }

    changeMinus = () => {
        this.setState(this.state.num > 0 ? {num: this.state.num - 1} : {num: 0})
    }

    render() {
        return (
            <div className="page__modification">
                <div className="modification__elements">
                    <Button label="-" click={this.changeMinus}></Button>
                    <p className="num">
                        {this.state.num}
                    </p>
                   
                    <Button label="+" click={this.changePlus}></Button>
                </div>
            </div>
        )
    }
        
    
}
  
export default ModificationPage