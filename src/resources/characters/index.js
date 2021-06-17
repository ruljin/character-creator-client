import { handleError } from "../../utils/handleError";

const RESOURCE_URL = `${process.env.REACT_APP_URL}/character`;

export async function getCharacter(code) {
  return fetch(`${RESOURCE_URL}/specific/${code}`).then(handleError);
}

// https://dzone.com/articles/consuming-rest-api-with-reactjs
// https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
