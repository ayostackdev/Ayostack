import Header from "./component/header";
import HeroSection from "./component/Hero";
import Experience from "./component/Experience";

import Skills from "./component/skills";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="premium-shell">
      <Header />
      <HeroSection />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
