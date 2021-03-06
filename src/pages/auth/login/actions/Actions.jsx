import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components/button/Button';
import styles from '../../auth.module.css';

export const Actions = ({
	value,
	loading,
	onInputChange,
	onLoadingCharacter,
	onCreatingNewCharacter,
}) => {
	const { t } = useTranslation(['placeholders', 'buttons']);

	return (
		<div className={styles.actions}>
			<input
				className='input'
				type='text'
				name='characterCode'
				placeholder={t('enter character code')}
				value={value}
				onChange={(e) => onInputChange(e)}
				disabled={loading}
			/>
			<Button variant='primary' onClick={onLoadingCharacter} disabled={loading}>
				{t('buttons:load character')}
			</Button>
			<Button
				variant='secondary'
				onClick={onCreatingNewCharacter}
				disabled={loading}>
				{t('buttons:create new character')}
			</Button>
		</div>
	);
};

Button.propTypes = {
	value: PropTypes.string,
	loading: PropTypes.bool,
	onInputChange: PropTypes.func,
	onLoadingCharacter: PropTypes.func,
	onCreatingNewCharacter: PropTypes.func,
};
