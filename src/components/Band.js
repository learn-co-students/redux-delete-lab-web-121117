import React, { Component } from 'react';

class Band extends Component {

  handleClick = event => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    console.log(this.props.band)
    return(
      <div>
        <li>
          {this.props.band.text}
          <button onClick={this.handleClick}>Delete Me!</button>
        </li>
      </div>
    );
  }
};

export default Band;
