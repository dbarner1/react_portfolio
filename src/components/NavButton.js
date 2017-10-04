import React from 'react';
import '../index.css';

class NavButton extends React.Component {

  render() {
    return (
        <a onClick={this.props.handleClick} id={ this.props.id } rel="noopener noreferrer" ><li><p>{ this.props.name }</p></li></a>
    )
  }
}

export default NavButton;
