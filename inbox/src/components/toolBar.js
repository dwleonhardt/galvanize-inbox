import React from 'react';


class ToolBar extends React.Component{

  constructor(){
    super();
    this.state = {
      selectAll: false
    }
  }

  selectAll = () => {
    if (this.state.selectAll) {
      this.setState({selectAll: false});
      this.props.selectAll(false)
    }
    else {
      this.setState({selectAll: true});
      this.props.selectAll(true)
    }
  }


  render() {

    var count = this.props.messages.filter((message) => {
      return message.read === false;
    })

    return (
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">{count.length}</span>
              unread messages
            </p>

            <a className="btn btn-danger">
              <i className="fa fa-plus"></i>
            </a>

            <button className="btn btn-default" onClick={this.selectAll}>
              <i className={`fa ${this.state.selectAll?'fa-check-square-o': 'fa-minus-square-o'}`}></i>
            </button>

            <button className="btn btn-default" onClick={this.props.allRead}>Mark As Read</button>

            <button className="btn btn-default" onClick={this.props.unread}>Mark As Unread</button>

            <select className="form-control label-select" onChange={(event) => this.props.addLabel(event.target.value)}>
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select" onChange={(event) => this.props.removeLabel(event.target.value)}>
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default" onClick={this.props.delete}>
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
    )
  }
}

export default ToolBar;
