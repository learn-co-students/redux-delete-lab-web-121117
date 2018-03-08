import React, { Component } from 'react';

class Band extends Component {
    handleOnClick = () => {
      this.props.store.dispatch({
        type: 'DELETE_BAND',
        id: this.props.id
      });
    }

  render() {
    return (
      <li>
        {this.props.band}
         <button onClick={this.handleOnClick} />
      </li>
    );
  }
};

export default Band;
