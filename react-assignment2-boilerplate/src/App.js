import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DisplayCard from './Components/displayCard/DisplayCard';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import ReadNow from './Components/readNow/ReadNow';
import Header from './Components/header/Header';
import PrivateRoute from './PrivateRoute';
import Footer from './Components/footer/Footer';
class App extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/dashboard' component={DisplayCard} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/readnow' component={ReadNow} />
        </Switch>
        <Footer />
      </Router>
    );
  }

}
export default App;
