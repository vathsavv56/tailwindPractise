import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer/"
export default function Layout(){


    return(
        <div id="mainBox" className="h-screen bg-white grid grid-rows-[80px_1fr_100px] ">
            <div id="top" className="h-full w-full ">
                <NavBar/>
            </div>
            <div id="content" className="h-[100vw]">
                <main>
                    <Outlet/>
                </main>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </div>
    )
}