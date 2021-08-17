import { useTranslation } from 'react-i18next';
import styles from '../../auth.module.css';

export const Header = () => {
	const { t } = useTranslation(['general']);

	return (
		<div className={styles.header}>
			<h1>{t('character creator')}</h1>
		</div>
	);
};
