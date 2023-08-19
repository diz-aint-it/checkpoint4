import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'A passionate individual.',
      imgSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      profession: 'Software Developer'
    },
    show: false,
    intervalId: null,
    mountedTime: null
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    const intervalId = setInterval(() => {
      this.forceUpdate(); 
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div className="Profile">
            <img src={imgSrc} alt={fullName} />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Mounted Time: {mountedTime && mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
