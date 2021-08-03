import PropTypes from "prop-types";
import { General } from "./sections/general/General";
import { Statistics } from "./sections/statistics/Statistics";
import { Skills } from "./sections/skills/Skills";
import { Spells } from "./sections/spells/Spells";

export const CharacterSheet = ({ formData }) => {
  return (
    <form>
      {formData ? (
        <>
          <General
            races={formData.races}
            classes={formData.classes}
            alignments={formData.alignments}
          />
          <Statistics />
          <Skills />
          <Spells />
        </>
      ) : null}
    </form>
  );
};

CharacterSheet.propTypes = {
  formData: PropTypes.object,
};
