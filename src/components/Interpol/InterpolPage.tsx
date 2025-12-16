import { Diffusion } from "./Diffusion";
import { Hero } from "./Hero";
import { InterpolIs } from "./InterpolIs";
import { OurHelp } from "./OurHelp";
import { RedNotice } from "./RedNotice";

export const InterpolPage = () => {
  return (
    <>
      <Hero />
      <InterpolIs />
      <RedNotice />
      <Diffusion />
      <OurHelp />
    </>
  );
};
