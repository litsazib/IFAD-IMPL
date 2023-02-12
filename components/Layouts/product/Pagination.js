import Link from 'next/link';
import { HiOutlineChevronLeft,HiOutlineChevronRight } from 'react-icons/hi';

const Pagination = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className="col-lg-12 text-center">
						<nav aria-label="Page navigation example" className="mt-5 mb-5 ">
							<ul className="pagination center">
								<li className="page-item shadow">
									<Link href="/">
										<a className="page-link shadow"><HiOutlineChevronLeft/></a>
									</Link>
								</li>

								<li className="page-item">
									<Link href="">
										<a className="page-link shadow">1</a>
									</Link>
								</li>
								<li className="page-item">
									<Link href="">
										<a className="page-link shadow">2</a>
									</Link>
								</li>
								<li className="page-item">
									<Link href="">
										<a className="page-link shadow">3</a>
									</Link>
								</li>
								<li className="page-item">
									<Link href="">
										<a className="page-link shadow">4</a>
									</Link>
								</li>
								<li className="page-item">
									<Link href="/">
										<a className="page-link shadow"><HiOutlineChevronRight/></a>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</section>
		</>
	);
};

export default Pagination;
