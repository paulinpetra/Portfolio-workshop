import { useTheme } from "../contexts/ThemeContextFile";
import ThemeButtonsComponent from "./ThemeButtons";

const Navbar = () => {
  const { state, dispatch } = useTheme();
  const fontSizeClass = state.userPreferences.fontSize;
  return (
    <nav className={`w-full ${fontSizeClass}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#hero" className="py-2 px-4 rounded hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="py-2 px-4 rounded hover:text-gray-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="py-2 px-4 rounded transform hover:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-end items-center space-x-4">
          <ThemeButtonsComponent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
