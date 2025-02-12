
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"


const Layout = () => {
    console.log("Layout se está renderizando");
    return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    )
    }
    export default Layout