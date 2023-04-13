import Footer from "./componients/footer/Footer";
import Navbar from "./componients/navbar/Navbar"
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import "./app.scss"
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Add from "./pages/add/Add";



function App() {


  const Layout = ()=>{
    return (
      <div className="app">
    <Navbar/>
    <Outlet/>
    <Footer/>
      </div>
   
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
        element:<Home/>
      },
      {
        path:"/gigs",
      element:<Gigs/>
    },
    {
      path: "/gig/:id",
      element: <Gig />,
    },
    {
      path:"/mygigs",
    element:<MyGigs/>
  },
  {
    path:"/orders",
  element:<Orders/>
  },
  {
    path:"/messages",
  element:<Messages/>
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/message/:id",
    element: <Message />,
  },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
     
    </div>
  )
}

export default App
