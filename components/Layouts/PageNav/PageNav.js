import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';
import Navstyle from '../../../styles/Navbar.module.scss';
import React, { useState,useEffect } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import { useRouter } from 'next/router';
// import mn from '../../../'

const PageNav = ({sendcatagoryItems}) => {

	const router = useRouter()

	const catagoryList = sendcatagoryItems?.map((item)=>{
		return (
			<NavDropdown.Item href="/product/"className="text-capitalize" key={item.id}>{item.name}</NavDropdown.Item>
		)
	})

	return (
		<>
		<header id="bg-shadow">
			<Navbar expand="lg" className="p-0" bg="" >
				<Container fluid>
					<Navbar.Brand href="#" className="ms-2 logo" legacyBehavior>
						<Link href="/">
							<img src="/IFADlogo.png" className='img-fluid' width={220} height={82} />
						</Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbarScroll" />

					<Navbar.Collapse id="navbarScroll">
						<Nav className={Navstyle.nav}>
							<Nav.Link id="1"
							className={router.pathname == "/" ? "manu-item activeMenu": "manu-item"}
							>
								<Link href="/">
									<span className={Navstyle.border}>Home</span>
								</Link>
							</Nav.Link>
							<NavDropdown
								className="p-0"
								title={
									<span className={router.pathname == "/about/CompanyReview" || router.pathname == "/about/Leadership" ? "left-line pe-0 activeDwMenu": "left-line pe-0"}
									>
										About Us
										<BsChevronDown className="ps-1" />
									</span>
								}
								id="navbarScrollingDropdown"
							>
								<NavDropdown.Item className="text-capitalize">
									<Link href="/about/CompanyReview">Company review</Link> 
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize">
									<Link href="/about/Leadership">
										<a>BOD & Leadership Team</a>
									</Link>
								</NavDropdown.Item>
							</NavDropdown>

							<Nav.Link id="2" className={router.pathname == "/product" ? "manu-item activeMenu": "manu-item"}>
								<Link href="/product">
									<span className={Navstyle.border+ ' rbrd3'}>our products</span>
								</Link>
							</Nav.Link>

							<Nav.Link id="3" className={router.pathname == "/globalReach" ? "manu-item activeMenu": "manu-item"}>
								<Link href="/globalReach">
									<span className={Navstyle.border}>global reach</span>
								</Link>
							</Nav.Link>

							<NavDropdown
								className="p-0"
								title={
									<span className={router.pathname == "/media/News" ? "left-line pe-0 activeDwMenu": "left-line pe-0"}>
										media
										<BsChevronDown className="ps-1" />
									</span>
								}
								id="navbarScrollingDropdown"
							>
							<NavDropdown.Item className="text-capitalize">
								<Link href="/media/News">news & events</Link> 
							</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link id="4" className="manu-item">
								<Link href="/contactus/NewContact">
									<span className="contact-button">contact us</span>
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
		</>
	);
};
  
export default PageNav;

