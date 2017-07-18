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
    }
    else {
      this.setState({selectAll: true});
    }
  }

  markRead = () => {

  }

  render() {

    return (
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">2</span>
              unread messages
            </p>

            <a className="btn btn-danger">
              <i className="fa fa-plus"></i>
            </a>
            {/*fa-minus-square-o fa-check-square-o  */}
            <button className="btn btn-default" onClick={this.selectAll}>
              <i className={`fa ${this.state.selectAll?'fa-check-square-o': 'fa-minus-square-o'}`}></i>
            </button>

            <button className="btn btn-default" onClick={this.markRead}>Mark As Read</button>

            <button className="btn btn-default">Mark As Unread</button>

            <select className="form-control label-select">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
    )
  }
}

export default ToolBar;
