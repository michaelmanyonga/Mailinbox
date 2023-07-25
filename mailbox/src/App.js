import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useUserContext } from "./context/userContext";
import Auth from './components/auth';
import Dashboard from './components/dashboard';
import Inbox from './components/inbox';   
import Messages from './components/messages';

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Router>        
            <Switch>
              <Route exact path="/" component={user ? Dashboard : Auth} />
              <Route path="/inbox" component={Inbox} /> 
              <Route path="/messages" component={Messages} />
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;



