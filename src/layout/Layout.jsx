import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer/"
export default function Layout() {
    return (
        <div id="mainBox" className="min-h-screen bg-white grid grid-rows-[auto_auto_auto] relative">
            <div id="top" className="w-full">
                <NavBar />
            </div>

            
            <div id="content" >
                <main className="p-4">
                    <Outlet />
                </main>
            </div>

            {/* <div id="footer" className="w-full absolute bottom-0">
                <Footer />
            </div> */}
        </div>
    );
}
