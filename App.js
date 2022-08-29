import React from "react";
import Card from "./components/card";
import Footer from "./components/footer";
import Routering from "./config/appRoutering/router";
import About from "./screens/about";
import Book from "./screens/booking";
import Contact from "./screens/contact";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Signup from "./screens/signup";



export default function App() {
    return (
        <>
            <Routering />
            {/* <Book /> */}
            {/* <Card /> */}
            {/* <Contact /> */}
            {/* <Profile /> */}
            {/* <Home /> */}
            {/* <Signup /> */}
            {/* <Footer /> */}
        </>
    )
}