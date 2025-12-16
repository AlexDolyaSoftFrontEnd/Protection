import { Hero } from "./Hero";
import { WhenYouNeedOurHelp } from "./WhenYouNeedOurHelp";
import { CitizenshipServices } from "./CitizenshipServices";
import { WhyWe } from "./WhyWe";
import AccessibilitySection from "./AccessibilitySection";
import { WhatYouGet } from "./WhatYouGet/WhatYouGet";

const HomePart = () => {
  return (
    <>
      <Hero />
      <WhenYouNeedOurHelp />
      <AccessibilitySection />
      <CitizenshipServices />
      <WhyWe />
      <WhatYouGet />
    </>
  );
};
export default HomePart;
