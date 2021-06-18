import { General } from "./sections/general/General";
import { Statistics } from "./sections/statistics/Statistics";
import { Skills } from "./sections/statistics/Statistics";
import { Spells } from "./sections/statistics/Statistics";

export const CharacterSheet = () => {
  return (
    <form>
      <General />
      <Statistics />
      <Skills />
      <Spells />
    </form>
  );
};
