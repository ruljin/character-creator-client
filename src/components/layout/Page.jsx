import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Character } from '../../pages/character/Character';

export const Page = () => {
	return (
		<Switch>
			<Route path='/' component={Character} />
		</Switch>
	);
};
