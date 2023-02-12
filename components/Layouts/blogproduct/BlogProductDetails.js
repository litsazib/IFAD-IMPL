import BlogProductStyle from '../../../styles/Blog.module.scss';
import {limitTxt} from '../../../utils/common.js'
import Link from 'next/link';
import Head from 'next/head';

const BlogProductDetails = ({sendBlogData,recentBlogData}) => {
 const {blog_image,blog_author,blog_date,blog_long_desc} = sendBlogData

	return (
		<>
			 <Head>
				<title>Blog | IFAD Multi-product</title>
			</Head>
			<section id="resent-blog">
				<div className="container">
					<div className="row">
						<dliv className="col-lg-7 rounded-2">
							<img src={blog_image} className="img-fluid w-100 blog-image-height mt-4 rounded" alt="" />
							<div className='d-flex blogTag'>
								{/* <span className="label label-primary auth">Author: {blog_author}</span>
								<span className="label label-primary date">Date: {blog_date}</span> */}
							</div>
							<div className="text">
								<p className="justify pt-3 pb-5">
									{blog_long_desc.toString()}
								</p>
							</div>
						</dliv>
						<div className="col-lg-5">
							<h1 className=' font-calibri border-bottom mt-4 mb-0'>Recent Blog</h1>
							<ul className="list-unstyled">
								{recentBlogData.map((item,idex)=>{
									return (
										<>
										<li className="border-bottom ">
											<Link href={`${item.id}`}>
												<a href={`${item.id}`} className='d-flex'>
													<img width={150} height={150} src={item.blog_image} alt="" className="resent-blog img-thumbnail me-3 mt-3 mb-3"/>
													<div className='caption mt-3'>
														<h2 className="display-7 font-calibri m-0">{item.blog_name}</h2>
														<p className="font-calibri m-0 display-8">{limitTxt(item.blog_short_desc,50)}</p>
														<p className=" display-8 font-calibri text-secondary">Date:
						
														{blog_date}
														</p>
													</div>
												</a>
											</Link>
										</li>
										
										</>
									)
								})}
							</ul>
							<button type='submit' className="border px-4 py-2 text-capitalize">all blogs</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogProductDetails;
