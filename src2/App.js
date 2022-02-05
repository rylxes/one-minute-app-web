import logo from './logo.svg';
import './App.css';
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import AddNew from "./components/AddNew";
import Content from "./components/Content";
import React from "react";


const App = () => {
  return (
      <div>
          {/*<div id="preloader">*/}
          {/*  <div id="status">*/}
          {/*    <div className="preloader-logo" />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="gallery-fix" /> {}
          <Header></Header>
          <AddNew></AddNew>
          <Content></Content>
      </div>
  );
}
export default App
