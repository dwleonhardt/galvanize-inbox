import React, { Component } from 'react';
import ToolBar from './components/toolBar';
import Messages from './components/messages';
// import { connect } from 'react-redux';
// import messages from './reducers/seed.js'





class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ToolBar />
        <Messages  />
      </div>
        );
  }
}


export default App;
