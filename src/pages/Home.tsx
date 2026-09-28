import Hero from "../sections/Hero";
import WhatIs from "../sections/WhatIs";
import Method from "../sections/Method";
import AppShowcase from "../sections/AppShowcase";
import Levels from "../sections/Levels";
import Speech from "../sections/Speech";
import ContextEnglish from "../sections/ContextEnglish";
import Blank from "../sections/Blank";
import Testimonials from "../sections/Testimonials";
import FinalCta from "../sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIs />
      <Method />
      <AppShowcase />
      <Levels />
      <Speech />
      <ContextEnglish />
      <Blank />
      <Testimonials />
      <FinalCta />
    </>
  );
}
