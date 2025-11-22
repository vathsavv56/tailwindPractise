import { useEffect, useState } from "react";
import logo from "../assets/imgs/luffyLogo.jpg"
import Loader from "./Loader";
import { GrGithub } from "react-icons/gr";




export default function Github() {
  const [user, setUser] = useState(null);
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
      
        const resUser = await fetch("https://api.github.com/users/");
        const userData = await resUser.json();
        setUser(userData);

       
        const resRepo = await fetch(userData.repos_url);
        const repoData = await resRepo.json();
        setRepo(repoData);

      } catch (err) {
        console.error("GitHub Fetch Error:", err);
        <CnfError text="Github Fetch error" className="text-red-500"/>
      }
    }

    loadData();
  }, []);

  if (!user) return <Loader className="text-red-500" />;

 
    return (
        <div className="bg-gray-500 h-screen w-full rounded-3xl  font-roboto-mono">
            <div id="profile" className="border border-black h-full w-1/3  relative rounded-3xl">
                <div id="pfp" className="h-1/4 border border-white p-10">
                    <img
                        src={user.avatar_url || logo}
                        alt="Profile"
                        className="w-32 h-32 rounded-3xl bg-white  left-1/16 top-14 object-cover"
                    />

                    <p className="mt-5 mb-5  text-white text-2xl">{user.login || "vathsavv56"}</p>
                    {/* <p id="email" className="mt-5 mb-5  text-white text-xl">{user.email || "inavoluvathsav@gmail.com"}</p> */}
                    <h3 className="text-white">Bio :</h3>
                    <br />
                    <p className="text-white w-full h-full text-smc">{user.bio || " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil at error, distinctio quisquam fugit temporibus voluptatum voluptatem sint eligendi impedit aut, earum reiciendis, totam dolores odio corporis? Ad, et nostrum?"}</p>

                    <p id="repos">

                    </p>
                </div>
            </div>


            <div id="goto" className="absolute bottom-10 left-10 px-4 py-3 rounded-3xl bg-blue-500 hover:bg-blue-700">
                <a href="https://github.com/vathsavv56" className="flex gap-2 items-center">
                    Github <GrGithub />
                </a>
            </div>

        </div>
    );


}