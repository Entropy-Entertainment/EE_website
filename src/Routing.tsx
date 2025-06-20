import {Route, Routes} from "react-router";
import {Footer} from "./components/Footer.tsx";
import {Header} from "./components/Header.tsx";
import {Home} from "@/pages/Home.tsx";
import {Projects} from "@/pages/Projects.tsx";
import {Posts} from "@/pages/Posts.tsx";
import {About} from "@/pages/About.tsx";
import {NotFound} from "@/pages/NotFound.tsx";

export const Routing = () => {

    return (
        <>
            <Header/>

            <Routes>
                <Route path={"*"} element={<NotFound />} />
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/json"} element={<Posts/>}/>
                <Route path={"/about"} element={<About/>}/>
            </Routes>

            <Footer/>
        </>
    )
}