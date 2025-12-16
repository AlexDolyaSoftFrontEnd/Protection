import { AdditionalServices } from "./AdditionalServices";
import { FreeConsultations } from "./FreeConsultations";
import { HeroServices } from "./HeroServices";
import { ServicesList } from "./ServicesList";

export const ServicesPage = () => {
  return (
    <>
      <HeroServices />
      <ServicesList />
      <AdditionalServices />
      <FreeConsultations />
    </>
  );
};
