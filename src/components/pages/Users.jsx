/** @format */

import './users.scss';
import { withLayout } from '../templates/Layout';
import { Button } from '../atoms/Button/Button';
import { initialState } from '../../setings/initialState';
import { UserItem } from '../molecules/UserItem/UserItem';
import { useState } from 'react';
import { ModalForm } from '../organisms/ModalForm/ModalForm';
import { DeleteModal } from '../organisms/DeleteModal/DeleteModal';

function Users() {
	const [users, setUsers] = useState(initialState);
	const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
	const [editModal, setEditModal] = useState({
		currentUser: null,
		isOpen: false,
	});
	const [deleteModal, setDeleteModal] = useState({
		currentUser: null,
		isOpen: false,
	});

	const createUser = (event, values, _) => {
		event.preventDefault();
		const newUser = { ...values };

		setUsers((prevState) => {
			return [newUser, ...prevState];
		});

		setIsOpenCreateModal(false);
	};

	const deleteUser = (event, index) => {
		event.preventDefault();

		setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
		setDeleteModal({ currentUser: null, isOpen: false });
	};

	const editUser = (event, values, user) => {
		event.preventDefault();

		const index = users.findIndex((item) => item.email === user.email);
		const newUser = { ...values };
		const newState = [newUser, ...users.slice(0, index), ...users.slice(index + 1)];

		setUsers(newState);
		setEditModal({ currentUser: null, isOpen: false });
	};

	const openEditModal = (index) => {
		setEditModal({ currentUser: users[index], isOpen: true });
	};

	const openCreateModal = () => {
		setIsOpenCreateModal(true);
	};
	const openDeleteModal = (index) => {
		setDeleteModal({ currentUser: index, isOpen: true });
	};

	return (
		<div className='container'>
			<div className='container__header'>
				<h3 className='container__title'>Пользователи</h3>
				<Button onClick={openCreateModal}>Добавить</Button>
			</div>
			<div className='users'>
				<UserItem />
				{users &&
					users.map((user, i) => (
						<UserItem
							key={i}
							id={i}
							user={user}
							openEditModal={openEditModal}
							openDeleteModal={openDeleteModal}
						/>
					))}
			</div>
			{isOpenCreateModal && (
				<ModalForm
					type='create'
					closeModal={setIsOpenCreateModal}
					onSubmitHandler={createUser}
				/>
			)}
			{editModal.isOpen && (
				<ModalForm
					type='edit'
					closeModal={setEditModal}
					onSubmitHandler={editUser}
					user={editModal.currentUser}
				/>
			)}
			{deleteModal.isOpen && (
				<DeleteModal
					deleteUser={deleteUser}
					id={deleteModal.currentUser}
					cancel={setDeleteModal}
				/>
			)}
		</div>
	);
}

export default withLayout(Users);
