import Header from "./component/header";
import HeroSection from "./component/Hero";
import Experience from "./component/Experience";
import SplashScreen from "./component/SplashScreen";

import Skills from "./component/skills";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="premium-shell">
      <SplashScreen />
      <Header />
      <HeroSection />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
