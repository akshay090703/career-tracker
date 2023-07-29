import logo from "../assets/images/logo.svg";
import white_logo from "../assets/images/white_logo.svg";
import { useDashboardContext } from "../pages/DashboardLayout";

const Logo = () => {
  const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";
    document.body.classList.toggle("dark-theme", isDarkTheme);
    return isDarkTheme;
  };

  const isDarkThemeEnabled = checkDefaultTheme();
  // const { isDarkTheme } = useDashboardContext();
  return (
    <img
      src={isDarkThemeEnabled ? white_logo : logo}
      alt="Career Tracker"
      className="logo"
    />
  );
};

export default Logo;
