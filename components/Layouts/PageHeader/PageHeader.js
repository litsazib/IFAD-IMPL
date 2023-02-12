import React, { useEffect, useState, useCallback } from 'react';
import PageNav from '../PageNav/PageNav';
import NavbarPosition from '../../../styles/Navbar.module.scss';

const PageHeader = ({sendcatagoryItems}) => {

	const [scrollY, setScrollY] = useState(0);

	const onScroll = useCallback((event) => {
		const { pageYOffset, scrollY } = window;
		setScrollY(window.pageYOffset);
		let scrollPosition = 50;
		if (scrollY > scrollPosition) {
			document.getElementById('Top').classList.add('sticky');
		} else {
			document.getElementById('Top').classList.remove('sticky');
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll, { passive: true });
		};
	}, []);

	return (
		<>
			<section id="" className={NavbarPosition.position}>
				<section id="Top" className={NavbarPosition.position}>
					<PageNav sendcatagoryItems={sendcatagoryItems} />
				</section>
			</section>
		</>
	);
};

export default PageHeader;
