
import Blogs from "../blogs/blogs";
import FAQsHome from "./FAQsHome";
import HeroSection from "./HeroSection";
import LogoSection from "./LogoSection";
import NewsLetter from "./NewsLetter";
import Pricing from "./Pricing";
import Services from "./Services";
import TeamSection from "./TeamSection";
import Testimonials from "./Testimonials";
import Tools from "./Tools";

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Tools/>
    <LogoSection/>
    <Services/>
    <Testimonials/>
    <Blogs/>
    <TeamSection/>
    <Pricing/>
    <FAQsHome/>
    <NewsLetter/>
    </>
  )
}

export default Home