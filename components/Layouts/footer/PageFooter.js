import Link from 'next/link';

const PageFooter = () => {
	return (
		<>
			<div className="text-center m-0">
				<p className="text-center text-light pt-5 font-corda">Quick Link</p>
				<div className="d-block justify-content-center">
					<ul className="d-flex flex-wrap justify-content-center text-uppercase list-unstyled font-calibri py-2 ">
						<li className="pe-1 my-1">
							<Link href="/about/CompanyReview" className="">
								<a className="link-border">About us</a>
							</Link>
						</li>
						<li className="pe-1 my-1">
							<Link href="/product" className="">
								<a className="link-border">Our products</a>
							</Link>
						</li>
						<li className="pe-1 my-1">
							<Link href="/globalReach" className="">
								<a className="link-border">Global Reach</a>
							</Link>
						</li>
						<li className="pe-1 my-1">
							<Link href="/contactus/NewContact" className="">
								<a className="link-border">Contact us</a>
							</Link>
						</li>
						<li className="pe-1 my-1">
							<Link href="https://ifadgroup.com/career/" className="">
								<a className="link-border border-0">Career</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default PageFooter;
