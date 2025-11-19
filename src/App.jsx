import { createBrowserRouter , RouterProvider} from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import DribbleNav from "./Components/NavBar/DribbleNav"
import Layout from "./layout/Layout"
import Home from "./Components/Home/Home"
const router = createBrowserRouter(
  [
    {
      path:"/",
      element : <Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/dribblenav",
          element:<DribbleNav/>

        },

      ]
    }
  ]
)


export default function App(){



  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}