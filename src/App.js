import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import AdminAddService from './Components/Admin/AdminAddService/AdminAddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AdminServiceList from './Components/Admin/AdminServiceList/AdminServiceList';
import Orders from './Components/Order/Orders/Orders';
import Review from './Components/Order/Review/Review';
import ServiceList from './Components/Order/ServiceList/ServiceList';
import PrivateRouter from './Components/Login/Login/PrivateRouter';




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRouter path="/orders/:id">
            <Orders></Orders>
          </PrivateRouter>

          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/adminAddService">
            <AdminAddService></AdminAddService>
          </Route>
          <Route path="/adminServiceList">
            <AdminServiceList></AdminServiceList>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/orderserviceList">
            <ServiceList></ServiceList>
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
