/** @format */
import { Button } from '../../atoms/Button/Button';
import '../ModalForm/modal-form.scss';
import './dalete-modal.scss';

export const DeleteModal = ({ deleteUser, id, cancel }) => {
	return (
		<div className='backdrop'>
			<div className='modal'>
				<div className='modal__header'>
					<h3 className='modal__title'>Удаление пользователя</h3>
				</div>
				<div className='modal__message-wrapper'>
					<span className='modal__message'>Удалить выбранного пользователя?</span>
				</div>
				<div className='modal__footer'>
					<Button type='cancel' onClick={() => cancel(false)}>
						Отменить
					</Button>
					<Button type='create' onClick={(e) => deleteUser(e, id)}>
						Удалить
					</Button>
				</div>
			</div>
		</div>
	);
};
