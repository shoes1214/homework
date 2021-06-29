import { createStore } from 'redux'
import reducer from './reducer'
const store=createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
  store.subscribe(()=>{localStorage.setItem("list",JSON.stringify(store.getState()))})
export default store
