import Router from './routes/index.tsx';
import { AuthProvider } from './hooks/useAuth.tsx';
import { ThemeProvider } from './contexts/SettingContext.tsx';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
