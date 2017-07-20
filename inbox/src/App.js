import React, { Component } from 'react';
import ToolBar from './components/toolBar';
import Messages from './components/messages';
// import { connect } from 'react-redux';

const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]



class App extends Component {
  constructor(){
    super()
    this.state = {
      messages,
    };
  }

  allRead = () => {
    var stateCopy = this.state.messages.slice();
    stateCopy.filter((message) => {
      return message.selected === true;
    })
    .forEach((message) => {
      message.read = true;
    });
    this.setState({messages: stateCopy});
  }

  unread = () => {
    var stateCopy = this.state.messages.slice();
    stateCopy.filter((message) => {
      return message.selected === true;
    })
    .forEach((message) => {
      message.read = false;
    });
    this.setState({messages: stateCopy});
  }

  selectAll = (bool) => {
    var stateCopy = this.state.messages.slice();
    stateCopy.forEach((message) => {
      message.selected = bool;
    })
    this.setState({messages: stateCopy});
  }

  delete = () => {
    var stateCopy = this.state.messages.slice();
    var newState = stateCopy.filter((message) => {
      return message.selected !== true;
    });
    this.setState({messages: newState});
  }

  addLabel = (label) => {
    var stateCopy = this.state.messages.slice();
    stateCopy.filter((message) => {
      return message.selected === true;
    })
    .forEach((message) => {
      message.labels.push(label);
    })
    this.setState({messages: stateCopy});
  }

  removeLabel = (label) => {
    var stateCopy = this.state.messages.slice();
    stateCopy.filter((message) => {
      return message.selected === true;
    })
    .forEach((message) => {
      message.labels.splice(message.labels.indexOf(label), message.labels.indexOf(label) + 1);
    })
    this.setState({messages: stateCopy});
  }

  markRead = (id) => {
    var stateCopy = this.state.messages.slice();
    var current = stateCopy.find((message)=> message.id === id);
    current.read = true;
    this.setState({messages: stateCopy});
  }

  selector = (id) => {
    var stateCopy = this.state.messages.slice();
    var current = stateCopy.find((message)=> message.id === id);
    current.selected = !current.selected;
    this.setState({messages: stateCopy});
  }

  star = (id) => {
    var stateCopy = this.state.messages.slice();
    var current = stateCopy.find((message)=> message.id === id);
    current.starred = !current.starred;
    this.setState({messages: stateCopy});
  }


  render() {
    return (
      <div className="container-fluid">
        <ToolBar messages={this.state.messages} allRead={this.allRead} unread={this.unread} selectAll={this.selectAll} delete={this.delete} addLabel={this.addLabel} removeLabel={this.removeLabel}/>
        <Messages messages={this.state.messages}  markRead={this.markRead} selector={this.selector} star={this.star} allRead={this.allRead}/>
      </div>
        );
  }
}

export default App;
