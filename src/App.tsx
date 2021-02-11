import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Quiz from "./pages/quiz";

function App() {
  
  return (<>
    <Router>
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>);
}

// setup project

export default App;
