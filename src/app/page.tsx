import Header from "./component/header";
import HeroSection from "./component/Hero";
import Footer  from './component/Footer'
import Skills from "./component/skills";
import Project from './component/Project'
export default function Home() {
  return (
    <div className="premium-shell">
   <Header/>
  <HeroSection/>
  <Project/>
    <Skills/>
  <Footer/>
    </div>
  );
}
