import React from 'react';
import { selected } from '../actions/index'
import Message from './message'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';


class Messages extends React.Component {
  constructor(props){
    super(props)

  }

    render(){

      var messagesList = this.props.messages[0].map((message) => {return (<Message key={message.id} id={message.id} labels={message.labels} read={message.read} starred={message.starred} subject={message.subject}  markRead={this.props.markRead}/>)})

      return (
         <div>
           {messagesList}
         </div>
       )

  }
}

const mapStateToProps = (state) => {
  return state;
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators( {dispatch});
}

export default connect(mapStateToProps, matchDispatchToProps) (Messages);
