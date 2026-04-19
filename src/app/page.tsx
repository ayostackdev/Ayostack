import Header from "./component/header";
import HeroSection from "./component/Hero";
import Contact from './component/Contact'
import Footer  from './component/Footer'
import Skills from "./component/skills";
import Testimonials from './component/Testimonial'
import Glass from './component/Glass'
import Project from './component/Project'
export default function Home() {
  return (
    <div className="premium-shell">
   <Header/>
  <HeroSection/>
  <Glass/>
  <Project/>
    <Skills/>
  <Testimonials/>
  <Contact/>
  <Footer/>
    </div>
  );
}
