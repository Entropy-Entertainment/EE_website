import {Route, Routes} from "react-router";
import Home from "@/pages/Home.tsx";
import Projects from "@/pages/Projects.tsx";
import Posts from "@/pages/Posts.tsx";
import Footer from "@/components/Footer.tsx";
import NotFound from "@/pages/NotFound.tsx";
import RenderedPost from "@/pages/RenderedPost.tsx";
import About from "@/pages/About.tsx";
import Header from "@/components/Header.tsx";

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