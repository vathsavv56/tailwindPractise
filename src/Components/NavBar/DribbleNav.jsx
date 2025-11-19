import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageCircleCode } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import DribbleSvg from "../../assets/logos/DribbleSvg";

export default function NavBar() {


    return (

        <>
            <header className="w-full h-full p-7 font-mona-sans text-[13px] font-semibold leading-[13px]">
                <nav className="flex items-center justify-between gap-5.5 ">
                    <div id="left" className="w-[89px] h-[25px] rounded-3xl grid place-items-center -rotate-2">
                        <DribbleSvg className="w-full h-full" />
                    </div>
                    <div id="searchBar" className="relative flex items-center bg-gray-100 w-[423px] h-14 rounded-full hover:outline-pink-600">
                        <input type="text" placeholder="What are you looking for?" className="w-full h-full p-4 pl-6 outline-none rounded-full font-medium bg-transparent" />
                        <div className="absolute right-2 flex items-center gap-2">
                            <a href="#" className="flex items-center justify-center hover:text-gray-500 pr-2 border-r border-gray-300">Shots<RiArrowDropDownLine /></a>
                            <button className="size-10 cursor-pointer rounded-full bg-[#EA4C89] text-white flex items-center justify-center">
                                <CiSearch className="m-auto text-2xl" />
                            </button>
                        </div>
                    </div>
                    <div id="dropDowns" className="w-[400px] ">
                        <ul className="flex items-center justify-around gap-2.5 text-[14px] font-semibold">
                            <li><a href="#" className="flex items-center justify-center hover:text-gray-500 ">Explore<RiArrowDropDownLine /></a></li>
                            <li><a href="#" className="flex items-center justify-center hover:text-gray-500 ">Find Talent<RiArrowDropDownLine /></a></li>
                            <li><a href="#" className="flex items-center justify-center hover:text-gray-500 ">Get Hired<RiArrowDropDownLine /></a></li>
                            <li><a href="#" className="flex hover:text-gray-500">Blog</a></li>

                        </ul>

                    </div>
                    <div className="flex items-center justify-center gap-7">
                        <div id="cta" className="flex items-center justify-center gap-3.5">
                            <div id="pro">
                                <button className="w-36 h-10 bg-black text-white rounded-3xl cursor-pointer text-center">
                                    Upgrade to Pro
                                </button>
                            </div>
                            <div id="shareWork">
                                <button className="w-36 h-10 outline outline-gray-180 rounded-3xl cursor-pointer text-center flex
                             items-center justify-center p-3.5">
                                    <GoPlus className="text-lg" /> Share Work
                                </button>
                            </div>
                        </div>

                        <div id="pfp" className="flex items-center justify-center gap-4 cursor-pointer">
                            <div id="msg" className="hover:text-gray-500">
                                <LuMessageCircleCode className="text-3xl" />
                            </div>
                            <div id="not" className="hover:text-gray-500" >
                                <IoIosNotificationsOutline className="text-3xl" />
                            </div>
                            <div id="p-img" className="rounded-full size-[42px] ">
                                {/* <CgProfile className="text-white text-3xl w-full h-full" /> */}
                                <img src="https://cdn.dribbble.com/users/25212222/avatars/normal/data?1760017896" alt="pfp" className="w-full h-full rounded-full" />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
