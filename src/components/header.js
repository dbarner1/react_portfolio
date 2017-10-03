import React from 'react';
import '../index.css';

function handleClick(e) {
  e.preventDefault();

  if(Portfolio.hideFlag == true) {

  }
  else
    class


}

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <a id="normal" target="_blank" rel="noopener noreferrer" href="https://github.com/dbarner1/"><li><p>GitHub</p></li></a>
              <a id="normal" target="_blank" rel="noopener noreferrer" href="BARNER_resume.pdf"><li><p>Resume</p></li></a>
              <a id="normal" onClick={ handleClick }><li><p>Portfolio</p></li></a>
              <a id="normal" target="_blank" rel="noopener noreferrer" href="https://jsfiddle.net/user/barner9000/fiddles/"><li><p>jsFiddles</p></li></a>
            </ul>
            <img id="daveCartoon" alt="A cartoon of Dave" src={require("../images/man-me.svg")} />
          </nav>
        </header>
    </div>
    )
  }
}

export default Header;
