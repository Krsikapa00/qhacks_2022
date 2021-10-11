import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Footer, Header} from './components/common';
import Home from './pages';
import Schedule from './pages/schedule';
import Archive from './pages/archive';
import ContactUs from './pages/contactUs';
import Faq from './pages/faq';
import OurTeam from './pages/ourTeam';
import Speakers from './pages/speaker';
import Sponsors from './pages/sponsors';
import Testimonials from './pages/testimonials';

function App() {
  return ( 
  
    <Router>
      <Header />
        <Switch>
          <div className="sidePadding fullscreen">
            <Route  path="/" exact component={Home}/>
            <Route path="/schedule" exact component={Schedule}/>
            <Route path="/speakers" exact component={Speakers}/>
            <Route path="/sponsors" exact component={Sponsors}/>
            <Route path="/testimonials" exact component={Testimonials}/>
            {/* <Route path="/archive" exact component={Archive}/> */}
            <Route path="/our-team" exact component={OurTeam}/>
            <Route path="/contact-us" exact component={ContactUs}/>
            {/* <Route path="/faq" exact component={Faq}/> */}
          </div>
        </Switch>
        <Footer />
    </ Router>
  );
}

export default App;
