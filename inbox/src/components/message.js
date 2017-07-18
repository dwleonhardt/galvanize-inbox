import React from 'react';
import Labels from './labels';


class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      read: props.read,
      selected: props.selected,
      starred: props.starred,
      showBody: false,
      selectAll: false,
      markRead: false
    }
  }


  markRead = () => {
    this.setState({read: true});
    if (this.state.showBody) {
      this.setState({showBody: false})
    }
    else {
      this.setState({showBody: true})
    }
  }

  // selected = () => {
  //   if (this.state.selected) {
  //     this.setState({selected: false});
  //   }
  //   else {
  //     this.setState({selected: true});
  //   }
  // }

  starred = () => {
    if (this.state.starred) {
      this.setState({starred: false});
    }
    else {
      this.setState({starred: true});
    }
  }


  render(){


    var labelList = this.props.labels.map((label, i) => {
      return <Labels key={i} label={label} />
    })

    return (
      <div>
        <div className={`row message ${this.state.read?'read' : 'unread'} ${this.state.selected?'selected': this.props.selectAll? 'selected': ''}`}>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" checked={this.props.selectAll? true: this.state.selected? true: false} onClick={this.selected}/>
              </div>
              <div className="col-xs-2">
                <i className={`star fa ${this.state.starred?'fa-star':'fa-star-o'}`} onClick={this.starred}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            {labelList}
            <a  onClick={this.markRead}>
              {this.props.subject}
            </a>
          </div>
        </div>
        <div className={`row message-body ${this.state.showBody?'':'hidden'}`}>
          <div className="col-xs-11 col-xs-offset-1">
            This is the body of the message.
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
