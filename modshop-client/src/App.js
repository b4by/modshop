import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <MainContent>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </MainContent>
      <Footer />
    </BrowserRouter> 
  );
}

export default App;
