

import AboutSection from "./HomePage/aboutus";
import BlogGlimpse from "./HomePage/blogsection";
import HomePageMain from "./HomePage/mainpage";
import HomeHighlights from "./HomePage/science";
import { ProductGlimpse } from "./HomePage/shop";
import SustainabilitySection from "./HomePage/sustainbility";
import { WhyArush } from "./HomePage/whyArush";

export default function Home() {
  return (
    <>

        <HomePageMain/>
        <AboutSection/>
        <WhyArush/>
        <ProductGlimpse/>
        <HomeHighlights/>
        <SustainabilitySection/>
        <BlogGlimpse/>

  </>
  );
}
