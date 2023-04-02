import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState , useEffect} from 'react';
import { limitTxt } from '../../../utils/common.js';
import ReactPaginate from 'react-paginate';
import ProductB from '../../../styles/Product.module.scss';
import ProductBg from '../../../styles/Product.module.scss';
import { BsArrowRight } from 'react-icons/bs';

const ProductCard = ({ products, catagorys }) => {

	const [catBG,setcatBG] = useState([]);

	useEffect(()=>{
		var btns = document.getElementsByClassName("btnPrdCat");
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("activeLink");
			if (current.length > 0) { 
				current[0].className = current[0].className.replace(" activeLink", "");
			}
			this.className += " activeLink";
			});
		}
	},[catagorys,products])

	const perPage = 6;
	const [productData, setproductData] = useState(products.slice(0, perPage));
	const [productsLength, setProductLength] = useState(products.length);

	const router = useRouter();
	const catagoryList = catagorys?.map((item, idx) => {
		const subCatName = item.sub_categories.map((subCat) => {
			return subCat.name;
		});

		const listOfCats = subCatName.map((el, idx) => {
			return (
				<li key={idx}>
					<button id="kiran" className="border-0  text-secondary bg-transparent fs-5 color text-uppercase fw-bold" onClick={() => filterItem(el)}>
						{el}
					</button>
				</li>
			);
		});

		return (
			<li key={item.id} className="pt-2 pb-2">
				<button 
				className="btnPrdCat border-0  text-secondary 
				bg-transparent fs-18 font-poppins 
				side-manu-color text-uppercase fw-bold"
				onClick={() => filterItem(item.name)}>
					<BsArrowRight className="me-2"/>{item.name} 
				</button>
				{subCatName.length > 0 ? <ul className="subCatagor">{listOfCats}</ul> : ''}
			</li>
		);
	});

	const filterItem = (filterItem) => {
		const result = products.filter((curData) => {
			return curData.category.name === filterItem;
		});
		const catagoryBg = catagorys.filter((cur,idx)=>{
			return cur.name === filterItem;
		})
		setcatBG(catagoryBg)
		setproductData(result);
		setProductLength(result.length);
	};

	const handleShowAllProduct = () => {
		setproductData(products.slice(0, perPage));
		setProductLength(products.length);
	};
	const handlePageClick = (e) => {
		window.scrollTo(0, 300);
		const selectedPage = e?.selected;
		setproductData(products.slice(selectedPage * perPage, selectedPage * perPage + perPage));
	};

	//let defaultBg = 'https://implcms.ifadgroup.com/_next/static/media/product_bg.39b07c19.png'
	let defaultBg = 'https://implcms.ifadgroup.com/storage/content-item/Factory-458233.jpg'
	let bg = `https://implcms.ifadgroup.com/storage/category-image/${catBG[0]?.image}`;
	const isDefualt = catBG[0]?.image === undefined ? true : false; 
	
	let background = {
		backgroundImage: `url(${bg})`
	};
	let backgroundDefualt = {
		backgroundImage: `url(${defaultBg})`
	};

	if (router.isFallback) {
		return <p>Loading....</p>;
	} else {
		return (
			<>
			<section style={isDefualt ? backgroundDefualt : background} className={ProductBg.aboutbg}></section>
			<section id="side-manu">
				<div className="container">
					<h1 className="display-3 fw-bold text-center mt-5 mb-5">Our Products</h1>
					{/* <p className="font-poppins text-center p-font mt-3 mb-5">
						We Are Restocking as Quickly as Possible. Come Back 7/30 to OrderMore of These Flavors
						<br /> Inspired by the Places You Call Home!
					</p> */}
					<div className="row">
						<div className="col-lg-3 text-center mt-4">
							<ul className="list-unstyled text-start">
								<li className="pt-2 pb-2">
									<button
										className="btnPrdCat color text-secondary border-0 fs-18 bg-transparent text-uppercase fw-bold"
										onClick={handleShowAllProduct}
									>
										<BsArrowRight className="me-2"/>All
									</button>
								</li>
								{catagoryList}
							</ul>
						</div>
						<div className="col-lg-9">
							{productData.length === 0 ? (
								<h1 className="text-center">
									<img width={400} height={400} className="mx-auto d-block" src="../no-products.jpg" alt="noprd" />
								</h1>
							) : (
								<div className="row">
									{productData.map((curElem, idx) => {
										const { id, product_name, Product_image, product_short_desc } = curElem;
										return (
											<div className="col-lg-4 text-center" key={idx}>
												<Link href="/product/[id]" as={`/product/${id}`}>
													<a className="text-dark">
														<div className="border mt-4" style={{height:'330px'}}>
															<div>
																<img src={Product_image} alt={product_name} className={ProductB.product_img} />
															</div>
															<h4 className="text-uppercase font-poppins producttitle mt-2">{product_name}</h4>
															<p className="text-capitalize font-poppins pb-2 m-0 text-secondary display-5 ps-2 pe-2">
																{product_short_desc}
															</p>
														</div>
													</a>
												</Link>
											</div>
										);
									})}
								</div>
							)}
							{productData.length !== 0 ? (
								<div className="col-lg-12 mx-auto mt-5">
									<nav className="text-center">
										<ReactPaginate
											previousLabel="<Previous"
											nextLabel="Next>"
											pageClassName="page-item"
											pageLinkClassName="page-link"
											previousClassName="page-item"
											previousLinkClassName="page-link"
											nextClassName="page-item"
											nextLinkClassName="page-link"
											breakLabel="..."
											breakClassName="page-item"
											breakLinkClassName="page-link"
											pageCount={productsLength / perPage}
											marginPagesDisplayed={2}
											pageRangeDisplayed={5}
											onPageChange={handlePageClick}
											containerClassName="pagination"
											activeClassName="active"
										/>
									</nav>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</section>
			</>
		);
	}
};

export default ProductCard;
