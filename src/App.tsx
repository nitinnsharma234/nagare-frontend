import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";
import { AuthProvider } from "./hooks/useAuth.tsx";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
