/** @format */
import { useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { XIcon } from '../../atoms/icons/X';
import { Input } from '../../atoms/Input/Input';
import './modal-form.scss';

export const ModalForm = ({ closeModal, onSubmitHandler, user, type }) => {
	const [values, setValues] = useState(
		user
			? { ...user }
			: {
					name: '',
					surname: '',
					patronymic: '',
					email: '',
					login: '',
			  }
	);

	const changeHandler = (event) => {
		setValues((prevState) => {
			return {
				...prevState,
				[event.target.name]: event.target.value,
			};
		});
	};

	const closeModalHandler = () => {
		closeModal(false);
	};

	const isDisabled = () => {
		return !Object.values(values).every((control) => control.trim() !== '');
	};

	return (
		<div className='backdrop'>
			<div className='modal'>
				<div className='modal__header'>
					{type === 'create' && <h3 className='modal__title'>Создание пользователя</h3>}
					{type === 'edit' && <h3 className='modal__title'>Редактирование пользователя</h3>}
					<span className='modal__icon' onClick={closeModalHandler}>
						<XIcon />
					</span>
				</div>
				<form
					className='modal__form-wrapper'
					onSubmit={(e) => onSubmitHandler(e, values, user)}>
					<div className='form'>
						<label className='form__label' htmlFor='surname'>
							Фамилия
							<Input
								name={'surname'}
								value={values.surname}
								change={changeHandler}
								className='form__input'
							/>
						</label>
						<label className='form__label' htmlFor='name'>
							Имя
							<Input
								name='name'
								value={values.name}
								change={changeHandler}
								className='form__input'
							/>
						</label>
						<label className='form__label' htmlFor='patronymic'>
							Отчество
							<Input
								name='patronymic'
								value={values.patronymic}
								change={changeHandler}
								className='form__input'
							/>
						</label>
						<label className='form__label' htmlFor='email'>
							E-mail
							<Input
								name='email'
								value={values.email}
								change={changeHandler}
								className='form__input'
							/>
						</label>
						<label className='form__label' htmlFor='login'>
							Логин
							<Input
								name='login'
								value={values.login}
								change={changeHandler}
								className='form__input'
							/>
						</label>
					</div>

					<div className='form__footer'>
						<Button type='create' disabled={isDisabled()}>
							{type === 'create' && 'Создать'}
							{type === 'edit' && 'Сохранить'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
