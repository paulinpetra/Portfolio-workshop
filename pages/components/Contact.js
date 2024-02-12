import { useTheme } from "../contexts/ThemeContextFile";

const Contact = () => {
  const { state, dispatch } = useTheme();
  const fontSizeClass = state.userPreferences.fontSize;
  return (
    <nav className={`w-full ${fontSizeClass}`}>
      <div className="container mx-auto px-6 py-2">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#hero" className="py-2 px-4 rounded hover:text-gray-400">
              Phone
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="py-2 px-4 rounded hover:text-gray-400"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="py-2 px-4 rounded transform hover:text-gray-400"
            >
              Links
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Contact;
