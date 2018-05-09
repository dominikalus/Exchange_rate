import React, { Component } from 'react';
import Clock from './Clock';
import MainTable from './MainTable';
import ChooseCurrency from './ChooseCurrency';
import ChoosenDataTable from './ChoosenDataTable';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        rates: []
      },
      view: []
    }
  }

  componentDidMount(){
    fetch('http://api.nbp.pl/api/exchangerates/tables/C/today/?format=json')
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res[0] });
        //this.setState({ data: res[0].data.rates });
      });
  }

  getData =(code, count)=>{
    axios.get(`http://api.nbp.pl/api/exchangerates/rates/C/${code}/last/${count}/`)
      .then(data => {
        //console.log(data.data.rates);
        this.setState({ view: data.data.rates });
      });
  }

  render() {
    return (
      <div>
        <Clock/>
        <MainTable myData={this.state.data.rates}/>
        <ChooseCurrency currency={this.state.data.rates} getData={this.getData}/>
        <ChoosenDataTable view={this.state.view} />
      </div>
    );
  }
}

export default App;
