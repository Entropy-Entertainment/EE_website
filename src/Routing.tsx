import {Route, Routes} from "react-router";
import * as React from "react";

const Header = React.lazy(() => import("@/components/Header.tsx"));
const Footer = React.lazy(() => import("@/components/Footer.tsx"));
const Home = React.lazy(() => import("@/pages/Home.tsx"));
const Projects = React.lazy(() => import("@/pages/Projects.tsx"));
const Posts = React.lazy(() => import("@/pages/Posts.tsx"));
const About = React.lazy(() => import("@/pages/About.tsx"));
const RenderedPost = React.lazy(() => import("@/pages/RenderedPost.tsx"));
const NotFound = React.lazy(() => import("@/pages/NotFound.tsx"));

export const Routing = () => {

    return (
        <>
            <Header/>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/posts"} element={<Posts/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/post"} element={<RenderedPost/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>

            <Footer/>
        </>
    )
}