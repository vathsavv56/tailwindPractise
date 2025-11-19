import { NavLink } from "react-router-dom"

export default function NavBar() {

  
    return (

        <>
            <header className="w-full h-full p-2 outline-1 outline-pink-600">
                <nav className="flex items-center justify-between outline-1 outline-green-500">
                    <div id="left" className="w-25 h-12 border-2 border-black bg-blue-500 rounded-3xl grid place-items-center">
                        <p className="font-roboto-mono text-center"> Logo here</p>
                    </div>
                    <div id="right">
                        
                    </div>
                </nav>
            </header>
        </>
    )
}