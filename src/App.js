import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Review from './Components/Order/Review/Review';
import ServiceList from './Components/Order/ServiceList/ServiceList';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import AdminServiceList from './Components/DashBoard/AdminServiceList/AdminServiceList';
import AdminAddService from './Components/DashBoard/AdminAddService/AdminAddService';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import Orders from './Components/Order/Orders/Orders';
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
          <PrivateRouter path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRouter>
          <Route path="/adminAddService">
            <AdminAddService></AdminAddService>
          </Route>
          <Route path="/adminServiceList">
            <AdminServiceList></AdminServiceList>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/userOrders">
            <Orders></Orders>
          </Route>
          <Route path="/userServiceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/userReview">
            <Review></Review>
          </Route>
          <Route path="/orderserviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
