export const handleError = (response) => {
	return response.text().then((text) => {
		throw Error(JSON.parse(text).error);
	});
};
