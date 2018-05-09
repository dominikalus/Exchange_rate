import React,{ Component } from 'react';


export default class ChooseCurrency extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'USD',
            amount: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        
        })
    };

    handleAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getData(this.state.value, this.state.amount);
    };

   
    render(){
        //console.log(this.state.amount);
        const code = this.props.currency.map((element,index) =>  <option key={index}>{element.code}</option>);
        return(
            <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange} value={this.state.value}>
               {code}
            </select>
            <input id="number" onChange={this.handleAmount} type="number" defaultValue='1' min="1" max="93" />
            <input type='submit' value='Submit'/> 
            </form>
        );
    }
}
