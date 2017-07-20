import React from 'react';
import Message from './message'

class Messages extends React.Component {


    render(){


      var messagesList = this.props.messages.map((message) => {return (<Message key={message.id} id={message.id} labels={message.labels} read={message.read} starred={message.starred} subject={message.subject} selected={message.selected} selector={this.props.selector} markRead={this.props.markRead} star={this.props.star} />)})


    return (
      <div>
        {messagesList}
      </div>
    )

  }
}


export default Messages;
