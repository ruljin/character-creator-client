const API = "http://cc.mattkrp.co.uk";
const url = "character";

const handleError = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export async function getCharacter(code) {
  return fetch(`${API}/${url}/specific/${code}`).then(handleError);
}

// https://dzone.com/articles/consuming-rest-api-with-reactjs
// https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
