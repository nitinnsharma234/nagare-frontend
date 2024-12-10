import Router from './routes/index.tsx';
import { ThemeProvider } from './contexts/SettingContext.tsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          success: {
            duration: 3000,
          },
        }}
      />
      <Router />
    </ThemeProvider>
  );
}

export default App;
