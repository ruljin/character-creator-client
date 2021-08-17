import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import forms from './locales/en/forms.json';
import placeholders from './locales/en/placeholders.json';
import buttons from './locales/en/buttons.json';
import errors from './locales/en/errors.json';
import general from './locales/en/general.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		resources: {
			en: {
				forms,
				placeholders,
				buttons,
				errors,
				general,
			},
		},
		lng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});
