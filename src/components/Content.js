import React, {useEffect, useState} from 'react'
import Menu from "./Menu";
import Search from "./Search";
import TopBar from "./TopBar";
import MainContent from "./MainContent";
import Footer from "./Footer";


const Content = () => {

    useEffect(() => {
        console.log('dd')
    })
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
    )
}
export default Content

