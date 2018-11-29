import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter, Switch, Route } from 'react-router-dom';
import indexRoutes from "./routes/routeIndex";

import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import Navbar from './components/Navbar';



class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoLogin()
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar />
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} key={key} component={prop.component} />;
            })}
          </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps)( App ) );
