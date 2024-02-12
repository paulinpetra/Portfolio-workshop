import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useTheme } from "./contexts/ThemeContextFile";

const Home = () => {
  const { state, dispatch } = useTheme();
  const fontSizeClass = state.userPreferences.fontSize;

  return (
    <div className="min-h-screen text-black dark:text-white bg-gradient-radial from-indigo-100 via-indigo-50 to-white dark:bg-gradient-radial dark:from-indigo-950 dark:via-black dark:to-black">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
