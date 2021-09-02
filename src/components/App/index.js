import React, { Component }from 'react';
import {Route, Switch, Link,withRouter} from 'react-router-dom';
import Home from './../Home';
import Header from './../Header';
import Footer from './../Footer';
import './index.css';

class App extends Component {

render(){


  return (
    <React.Fragment>
      <Header/>
    <div className="App">
      <Switch>
        <Route path='/'component={Home} exact/>

      </Switch>
    </div>
    <Footer/>
    </React.Fragment>
  );
}
}
export default App;
