import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Navbar} from './components/common';
import Home from './components/pages';
import Schedule from './components/pages/schedule';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/schedule" exact component={Schedule}/>
          
        </Switch>
    </ Router>
  );
}

export default App;
