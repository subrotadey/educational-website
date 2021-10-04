import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeBody from './component/HomeBody/HomeBody';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <HomeBody></HomeBody>
      <Switch>
        <Route path=""></Route>
        <Route path=""></Route>
        <Route path=""></Route>
        <Route path=""></Route>
        <Route path=""></Route>
        <Route path=""></Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
