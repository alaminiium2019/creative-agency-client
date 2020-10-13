import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import OrdersideBar from './Components/Order/OrdersideBar/OrdersideBar';
import OrderList from './Components/Order/OrderList/OrderList';
import ServiceList from './Components/Order/ServiceList/ServiceList';
import Review from './Components/Order/Review/Review';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>{loggedInUser.name}</p>
<Router>
  <Switch>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/orderlist">
      <OrderList></OrderList>
    </Route>
    <Route path="/servicelist">
      <ServiceList></ServiceList>
    </Route>
    <Route path="/review">
      <Review></Review>
    </Route>
    <Route path="/">
      <Home></Home>
    </Route>
  </Switch>
</Router>
</UserContext.Provider>
  );
}

export default App;
