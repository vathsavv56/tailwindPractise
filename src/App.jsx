import { createBrowserRouter , RouterProvider} from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import NavMenu from "./Components/NavMenu"
import Layout from "./layout/Layout"
import Home from "./Components/Home/Home"
import Error from "./Components/ErrorRoute/Error"
import Menu from "./Components/Menu"
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
          path:"/navbars",
          element:<NavMenu/>

        },
        {
          path:"/menu",
          element:<Menu/>
        }

      ]
    },
    {
      path:"*",
      element:<Error/>
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