import React from "react";
import Header from "./Header";
import AddNew from "./AddNew";
import Content from "./Content";



class OneMinuteApp extends React.Component {
  render() {
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
}

export default OneMinuteApp;
