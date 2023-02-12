import React from 'react';
import PageNav from '../../../components/Layouts/PageNav/PageNav';
import NavbarStyle from '../../../styles/Navbar.module.scss';

const Manubar = () => {
	return (
		<>
			<header>
				<section id="navigation" className={NavbarStyle.position}>
					<section className={NavbarStyle.position}>
						<div className="">
							<PageNav />
						</div>
					</section>
				</section>
			</header>
		</>
	);
};

export default Manubar;
