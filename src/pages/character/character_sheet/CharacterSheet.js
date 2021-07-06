import { General } from "./sections/general/General";
import { Statistics } from "./sections/statistics/Statistics";
import { Skills } from "./sections/skills/Skills";
import { Spells } from "./sections/spells/Spells";

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
