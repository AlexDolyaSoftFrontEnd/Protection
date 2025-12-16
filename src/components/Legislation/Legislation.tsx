import { HeroLegislation } from "./HeroLegislation";
import { LegislationList } from "./LegislationList";
import { LegislativeChangesList } from "./LegislativeChangesList";

export const Legislation = () => {
  return (
    <>
      <HeroLegislation />
      <LegislativeChangesList />
      <LegislationList />
    </>
  );
};
