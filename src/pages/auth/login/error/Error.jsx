import { useTranslation } from 'react-i18next';
import styles from '../../auth.module.css';

export const Error = () => {
	const { t } = useTranslation(['errors']);

	return <div className={styles.errors}>{t('provided code is invalid')}!</div>;
};
