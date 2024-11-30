import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";
import { AuthProvider } from "./hooks/useAuth.tsx";
import { ThemeProvider } from './contexts/SettingContext.tsx';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
