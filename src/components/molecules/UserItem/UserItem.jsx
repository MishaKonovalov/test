/** @format */

import cn from 'classnames';
import { Button } from '../../atoms/Button/Button';
import './user-item.scss';

export const UserItem = ({ user = 'default', id, openEditModal, openDeleteModal }) => {
	const { name, surname, patronymic, email, login } = user;

	const openEditModalHandler = () => {
		openEditModal(id);
	};
	const openDeleteModalHandler = () => {
		openDeleteModal(id);
	};

	return (
		<div
			className={cn({
				users__item_default: user === 'default',
				users__item: user !== 'default',
			})}>
			<span className='users__params'>{user === 'default' ? 'Фамилия' : surname}</span>
			<span className='users__params'> {user === 'default' ? 'Имя' : name}</span>
			<span className='users__params'>{user === 'default' ? 'Отчество' : patronymic}</span>
			<span className='users__params'>{user === 'default' ? 'E-mail' : email}</span>
			<span className='users__params'>{user === 'default' ? 'Логин' : login}</span>
			{user !== 'default' && (
				<div className='icons-wrapper'>
					<Button type='edit' onClick={openEditModalHandler} />
					<Button type='delete' onClick={openDeleteModalHandler} />
				</div>
			)}
		</div>
	);
};
