import React from 'react';
import Dashboard from './Components/dashboard/Dashboard';
 import './App.css';
// import Footer from './Components/footer/Footer';
// import Header from './Components/header/Header';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';

class App extends React.Component {
  render() {

    return <div className='main-content' >
      <Header />
      <Dashboard />
      <Footer />
    </div>

  }
}
export default App;
