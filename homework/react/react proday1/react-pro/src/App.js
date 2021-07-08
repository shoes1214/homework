import { Suspense } from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import routes from "./route";
function App() {
  return (
    <Suspense fallback={<h1>加载中...</h1>}>
      {/* 使用suspense包裹使整个组件有懒加载功能 */}
    <Router>
      <Switch>
        {routes.map((route)=>{
         
          return <Route {...route} key={route.path} exact/>
          // 给route加上exact使其path精确匹配
        })}
      </Switch>
    </Router>
    </Suspense>
  );
}
// 最后使用npm run build打包
// 开启时使用serve build -l 3000 指令
export default App;
