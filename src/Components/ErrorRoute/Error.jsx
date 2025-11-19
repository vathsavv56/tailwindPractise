import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";


const Error = () => {
    return (
        <>
            <div id="error" className='font-page-error'>
                <div className='w-screen h-screen bg-black text-white flex justify-center items-center flex-col'>
                    <div className='text-center'>
                        <p className='text-9xl font-extrabold text-red-500 -tracking-tighter'>404</p>
                        <p className='text-5xl font-semibold text-red-500 mt-4'>Error, Page Not Found</p>
                    </div>
                    <Link to="/"
                        className='font-roboto-mono p-4 outline outline-white mt-8 hover:bg-white hover:text-black transition-all duration-300 rounded-full flex items-center gap-2'
                    >   <FaArrowLeft />
                        Go Home</Link>
                </div>
            </div>
        </>
    )
}

export default Error