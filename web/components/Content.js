import React from "react";
import Menu from "./Menu";
import Search from "./Search";
import TopBar from "./TopBar";
import MainContent from "./MainContent";
import Footer from "./Footer";

class Content extends React.Component {
  render() {
    return (
      <div className="all-elements">
        <div className="snap-drawers">
          <Menu></Menu>
          {}
          <Search></Search>
          {}
          <TopBar></TopBar>
          <MainContent></MainContent>
          <Footer></Footer>
        </div>
        {}
      </div>
    );
  }
}

export default Content;
