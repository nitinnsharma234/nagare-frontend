import { createBrowserRouter,  } from "react-router-dom";
import Home from "../pages/protected/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import Signup from "../pages/Auth/Signup";
  
const router = createBrowserRouter([
  {
    path: "/",
    element:<ProtectedRoute>
        <Home/>
    </ProtectedRoute>,
    errorElement: <h2>Create an error page here </h2>,
    children: [

    ],
  },
  {
    path: "/login",
    element:<Signup/>,
    errorElement: <h2>Create an error page here </h2>,
    children: [

    ],
  },
]);
export default router;



