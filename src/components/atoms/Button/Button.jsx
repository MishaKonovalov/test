/** @format */

import './button.scss';
import { AddIcon } from '../icons/AddIcon';
import cn from 'classnames';
import { TrashIcon } from '../icons/TrashIcon';
import { AditIcon } from '../icons/AditIcon';

export const Button = ({ children, type = 'add', ...props }) => {
	return (
		<button
			{...props}
			className={cn('button', {
				button_add: type === 'add',
				button_create: type === 'create',
				button_delete: type === 'delete',
				button_adit: type === 'edit',
				button_cancel: type === 'cancel',
			})}>
			{type === 'add' && <AddIcon />}
			{type === 'delete' && <TrashIcon />}
			{type === 'edit' && <AditIcon />}
			{children}
		</button>
	);
};
