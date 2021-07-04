import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import routes from "./route";
function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route)=>{
          console.log(route)
          return <Route {...route} key={route.path} />
        })}
      </Switch>
    </Router>
  );
}

export default App;
