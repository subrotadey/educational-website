import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeBody from './component/HomeBody/HomeBody';
import Services from './component/Services/Services';
import AboutUs from './component/AboutUs/AboutUs';
import ContactUs from './component/ContactUs/ContactUs';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      {/* <HomeBody></HomeBody> */}
      <Switch>
        <Route exact path="/">
          <HomeBody></HomeBody>
        </Route>
        <Route path="/home">
          <HomeBody></HomeBody>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        <Route path=""></Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
