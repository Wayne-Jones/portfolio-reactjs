import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Bob',
    };
  }

  render() {
    const { text } = this.state;
    return (
      <>
        <p>{text}</p>
      </>
    );
  }
}

export default Header;
