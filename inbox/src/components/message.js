import React from 'react';
import Labels from './labels';


class Message extends React.Component {
  constructor(){
    super();
    this.state = {
      showBody: ''
    }
  }

  showBody = () => {
    if (this.state.showBody === '') {
      this.setState({showBody :'hidden'});
    }
    else {
      this.setState({showBody :''});
    }
  }


  render(){

    var labelList = this.props.labels.map((label, i) => {
      return <Labels key={i} label={label} />
    })

    return (
      <div>
        <div className={`row message ${this.props.read?'read' : 'unread'} ${this.props.selected?'selected': this.props.selectAll? 'selected': ''}`}>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" checked={this.props.selectAll? true: this.props.selected? true: false} onClick={() => this.props.selector(this.props.id)}/>
              </div>
              <div className="col-xs-2">
                <i className={`star fa ${this.props.starred?'fa-star':'fa-star-o'}`} onClick={() => this.props.star(this.props.id)}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11" onClick={this.showBody}>
            {labelList}
            <a  onClick={() => this.props.markRead(this.props.id)}>
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
