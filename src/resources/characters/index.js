import { handleError } from '../../utils/handleError';

const RESOURCE_URL = `${process.env.REACT_APP_URL}/characters`;

const createQueryParam = (code) => {
	if (code) {
		return `?${new URLSearchParams({ characterCode: code })}`;
	} else {
		return '';
	}
};

export async function getCharacter(code) {
	return fetch(`${RESOURCE_URL}` + createQueryParam(code)).then((response) => {
		if (response.ok) {
			return response.json();
		}

		return handleError(response);
	});
}

export async function getFormData() {
	return fetch(`${RESOURCE_URL}/form`).then((response) => {
		if (response.ok) {
			return response.json();
		}

		return handleError(response);
	});
}

// https://dzone.com/articles/consuming-rest-api-with-reactjs
// https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
