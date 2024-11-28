
  import { createBrowserRouter,  } from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1 text-black>Welcome to home page</h1>,
      errorElement: <h2>Create an error page here </h2>,
      children: [

      ],
    },
  ]);
  export default router;
  
  
  
  