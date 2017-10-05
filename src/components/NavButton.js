import React from 'react';
import '../index.css';

class NavButton extends React.Component {
  render() {
    return (
        <button class="TemplateButton">{ this.props.text }</button>
    )
  }
}

export default NavButton;
