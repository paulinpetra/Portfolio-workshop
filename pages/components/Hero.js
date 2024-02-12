import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      className={`${styles.heroBackground} flex flex-col items-center py-52`}
    >
      <div className="flex flex-col items-center space-y-4 mx-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Petra Paulin
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Front end developer
        </p>
      </div>
    </div>
  );
};

export default Hero;
