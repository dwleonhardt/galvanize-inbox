import React from 'react';
import Message from './message'

class Messages extends React.Component {


    render(){


      var messagesList = this.props.messages.map((message) => {return (<Message key={message.id} id={message.id} labels={message.labels} read={message.read} starred={message.starred} subject={message.subject} selectAll={this.props.selectAll} markRead={this.props.markRead}/>)})


    return (
      <div>
        {messagesList}
      </div>
    )

  }
}


export default Messages;
