import React, { Component } from 'react';
import './App.css';

// material-ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Route, Switch, Link } from 'react-router-dom';

import LandingPage from './components/landing-page';
import Recognize from './components/recognize';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  toggleDrawerMenu() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  handleClose() {
    this.setState({
      toggle: false
    });
  }

  render() {
    return (
      <div>
        <AppBar
          className='app-bar'
          title='Capgemini Workshop PWA'
          onLeftIconButtonClick={() => this.toggleDrawerMenu()}
          zDepth={2}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.toggle}
          onRequestChange={(toggle) => this.setState({ toggle })}
        >
          <Link to={'/'} className='link'><MenuItem onClick={() => this.handleClose()}>Home</MenuItem></Link>
          <Link to={'/recognize'} className='link'><MenuItem onClick={() => this.handleClose()}>Am i happy or sad?</MenuItem></Link>
        </Drawer>

        <Switch>
          <Route exact path='/' render={(props) => <LandingPage {...props} />} />
          <Route path='/recognize' render={(props) => <Recognize {...props} />} />
          <Route path='**' render={(props) => <LandingPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
