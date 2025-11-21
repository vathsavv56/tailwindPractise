import kaiser from '../../assets/imgs/kaiser.jpg'

const Hero = () => {
  return (
   <>

    <div className="h-[150vh] bg-red-500">
      <Hero1/>
    </div>

   </>

  )
}



function Hero1(){
  return(

      <div className="h-1/2 bg-[#FEF462] relative mb-5 rounded-3xl">

          <div id="left" className=' relative w-1/2 left-0 rounded-3xl outline outline-blue-500 p-10'>

            <img src={kaiser} alt="hero image here" className='h-full w-full rounded-3xl  ' />

          </div>

          <div id="right">

          </div>

      </div>

  )
}



export default Hero