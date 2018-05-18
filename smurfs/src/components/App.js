import React, { Component } from 'react';
// import logo from './logo.svg';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <SmurfForm />
          {this.props.smurfs.map(smurf => {
            return <Smurf smurf={smurf} key={smurf.id} />;
          })}; 
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfReducer } = state;
  return {
    fetchSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
