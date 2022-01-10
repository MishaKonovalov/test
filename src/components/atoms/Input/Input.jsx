/** @format */
import './input.scss';
export const Input = ({ value, change, ...props }) => {
	return <input {...props} type='text' value={value} onChange={change} />;
};
