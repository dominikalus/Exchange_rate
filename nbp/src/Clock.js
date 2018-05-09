import React,{ Component } from 'react';

export default class Clock extends Component{
    constructor(props){
        super(props);
            this.state = {
                time: new Date().toLocaleTimeString('en-US', { hour12: false })
            }
    }

    componentDidMount() {
        this.interval = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

      tick() {
        this.setState({
          time: new Date().toLocaleTimeString('en-US', { hour12: false })
        });
      }

    render(){
        return (
            <h1>
                {this.state.time}
            </h1>
        )
    }
}
