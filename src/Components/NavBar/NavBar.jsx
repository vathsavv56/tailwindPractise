import { NavLink } from "react-router-dom"
import logo from "../../assets/imgs/luffyLogo.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiDocument } from "react-icons/hi2";



const NavBar = () => {
  return (
    <header className="p-1 relative top-0 h-full w-full">
      <nav className="flex items-center justify-between p-6 bg-black text-white rounded-4xl mt-5">
        <div id="logo" className="size-20 rounded-4xl flex items-center gap-4">
          <img src={logo} alt="logo here" className="rounded-4xl" />
          <p className="font-roboto-mono text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) => `p-2 ${isActive ? "text-gray-500" : "text-white"}`}
            >
              Home
            </NavLink>
          </p>
        </div>

        <div id="middle" className="flex gap-4 cursor-pointer">
          <div id="github" className="group relative">
            <a
              href="https://github.com/vathsavv56/Tailwind-Practise"
              target="_blank"
              rel="noopener noreferrer"
              data-name="github-repo"
              aria-label="GitHub Repository"
              className="flex"
            >
              <FaGithubAlt className="text-2xl hover:text-gray-400" />
            </a>
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow group-hover:opacity-100 transition-opacity">
              GitHub Repo
            </span>
          </div>

          <div id="linkedin" className="group relative">
            <a
              href="https://www.linkedin.com/in/vathsav-inavolu-561068368/"
              target="_blank"
              rel="noopener noreferrer"
              data-name="linkedin"
              aria-label="LinkedIn Profile"
              className="flex"
            >
              <FaLinkedin className="text-2xl hover:text-gray-400" />
            </a>
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </div>

            <div id="resume" className="group relative">
            <a
              href="https://drive.google.com/file/d/1ruB_3qBcJNB02r_7g5HnswIIFSwaNRYM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-name="resume-link"
              aria-label="Resume"
              className="flex"
            >
              <HiDocument className="text-2xl hover:text-gray-400" />
            </a>
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow group-hover:opacity-100 transition-opacity">
              Resume
            </span>
          </div>
        </div>

        <div id="right" className="font-roboto-mono w-35 h-10 text-white bg-black rounded-full hover:bg-gray-800 flex items-center justify-center p-4 gap-4 border border-white">
          <div id="portfolio">
            <a
              href="https://vathsavv56.github.io/My-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              Portfolio<FaArrowRight className="group-hover:text-2xl" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar