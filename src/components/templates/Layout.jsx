/** @format */

import './layout.scss';
const Layout = ({ children }) => {
	return (
		<section className='page'>
			<header className='header'></header>
			<section className='sidebar'></section>
			<div className='body'>{children}</div>
		</section>
	);
};
export const withLayout = (Component) => {
	return function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
