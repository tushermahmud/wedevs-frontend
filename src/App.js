import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EnhancedTable from "./components/Admin/Table";
import Main from "./components/Admin/Main";
import Layout from "./components/Layout";
import { Fragment } from 'react';
import Table from "./components/Admin/Table";
import AddProduct from "./components/Admin/products/AddProduct";
import Login from './User/LoginScreen';
import Register from './User/Register';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from "./User/ProtectedRoute"
function App() {
  const {isAuthenticated,loading,user} = useSelector(state=>state.authReducer);
  console.log(isAuthenticated,loading,user);
  return (
      <Router>
          {isAuthenticated?<Layout />:null}
            <Switch>
            <ProtectedRoute exact path="/add-product" component={AddProduct}/>
            <Route exact path="/login" component={Login}/> 
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/products">
              <Table />
            </Route>
          
          <ProtectedRoute path="/" component={Main} />
          </Switch>

      </Router>

    );
}

export default App;