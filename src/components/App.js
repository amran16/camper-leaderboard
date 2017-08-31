import React, { Component } from 'react';
import axios from 'axios';
import CampersList from './campersList';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recent: [],
      alltime: [],
      current: 'recent'
    };
  }

  componentWillMount(){
    this.fetchData();
  }

   fetchData(){
    // Get Recent camper data:
     axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
          .then(res => {
            //console.log(res.data);
           this.setState({
             recent: res.data,
           })
          })
          .catch(err => {
            console.log(err);
          })
     // Get alltime camper data:
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
         .then(res => {
           //console.log(res.data);
         this.setState({
           alltime: res.data,
           })
         })
         .catch(err => {
            console.log(err);
         })
    }

  render() {
    const {current} = this.state
    return (
      <div>
        <div className='header'>
        <h3>{`Display of ${current} data`}</h3>
         <button onClick={() => this.setState({current: 'recent'})} className='btn btn-outline-primary btn-lg'>Recent Points</button>
         <button onClick={() => this.setState({current: 'alltime'})} className='btn btn-outline-primary btn-lg'>Total Points</button>
          </div>
         <CampersList campers={this.state[current]} />
      </div>
    );
  }
}
