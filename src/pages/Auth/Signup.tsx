import useTheme from '../../hooks/useTheme';
import NavbarHorizontal from '../../layouts/dashboard/navbar';

const Signup = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-[#332777e1] max-h-screen w-full mx-auto">
      <div>Signup</div>

      <button onClick={toggleTheme} className="text-black">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <NavbarHorizontal />
    </div>
  );
};

export default Signup;
