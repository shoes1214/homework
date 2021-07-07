import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import routes from "./route";
function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route)=>{
         
          return <Route {...route} key={route.path} exact/>
          // 给route加上exact使其path精确匹配
        })}
      </Switch>
    </Router>
  );
}

export default App;
