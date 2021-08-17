import { useTranslation } from 'react-i18next';
import { GithubLink } from './GithubLink';
import styles from '../../auth.module.css';

export const Footer = () => {
	const { t } = useTranslation(['general']);

	return (
		<footer className={styles.copyrights}>
			&#169; <GithubLink url='https://github.com/ruljin' profileName='Ruljin' />{' '}
			& <GithubLink url='https://github.com/Ulwothar' profileName='Ulwothar' />,{' '}
			{t('all rights reserved')}
		</footer>
	);
};
