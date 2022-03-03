
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Join from "./component/Join/Join"
import Chat from "./component/chat/Chat"



function App() {



  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component={Join} />
        <Route exact path = '/chat' component={Chat} />
        </Switch>
        


      </Router>
    </div>
  );
}

export default App;
