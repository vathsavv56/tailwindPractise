import kaiser from '../../assets/imgs/kaiser.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
   <>

    <div className="h-[150vh]">
      <Hero1/>
    </div>

   </>

  )
}



function Hero1(){

  return(

      <div className="h-[600px] bg-yellow-300 relative mb-5 rounded-3xl flex">

          <div id="left" className=' font-roboto-mono relative w-1/3 h-full  rounded-3xl  p-15 hover:p-20 after:absolute after:px-4 after:py-2  after:bg-blue-500 after:content-["Kaiser"] after:opacity-0 hover:after:opacity-100 after:rounded-2xl after:text-white  transition-all after:top-30 after:h-[50px] after:w-[100px] after:text-center'>

            <img src={kaiser} alt="hero image here" className='h-full w-full object-cover rounded-3xl' />

          </div>

          <div id="right" className='w-2/3 h-full p-10 rounded-3xl'>
            <h3 className='font-bold text-3xl font-roboto-mono underline mb-5'>What is this ??</h3>
            <p className='font-roboto-mono leading-7 mb-5'>This is a repo (Website) where I push my code in the designs that I practised via tailwindcss. 
              I wanna improve my skills in tailwindcss and react by building small components and websites, and I am intrested in WebDesign and UI/UX as well.
            </p>

            <p className='font-roboto-mono leading-7 mb-5'>
              So I thought why not combine both of them and practise them together. So here I am building small components and websites using tailwindcss and react.
            </p>
            <p className='font-roboto-mono leading-7'>
              This is Just a practice repo, Where I just add components that I wanna learn and Design or I will add components That I copy their UI as it is  so if you find any issues or bugs, please feel free to raise an issue in the repo. Your feedback is highly appreciated.
            </p>

            <Link to={"/menu"}
              className='inline-block mt-5 px-5 py-3 bg-blue-600 text-white font-roboto-mono rounded-full hover:bg-blue-700 transition-colors absolute bottom-10 right-10'
            >
              View Components <FaArrowRight className='inline-block ml-2'/>
            </Link>
          </div>

      </div>

  )
}



export default Hero