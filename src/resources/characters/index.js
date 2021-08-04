import { handleError } from "../../utils/handleError";

const RESOURCE_URL = `${process.env.REACT_APP_URL}/characters`;

export async function getCharacter(code) {
  return fetch(`${RESOURCE_URL}/${code}`)
    .then((response) => response.json())
    .catch((error) => handleError(error));
  // .catch(handleError);
}

export async function getFormData() {
  return fetch(`${RESOURCE_URL}/form`)
    .then((response) => response.json())
    .catch((error) => handleError(error));
}

// https://dzone.com/articles/consuming-rest-api-with-reactjs
// https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
