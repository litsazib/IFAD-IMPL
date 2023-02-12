import BlogStyle from '../../styles/Blog.module.scss';

import {getBlog} from '../api/';
import { useState } from 'react';
import AllBlog from '../../components/Layouts/about/Allblogs/AllBlog';
import Head from 'next/head';

const Blog = ({blogList}) => {

	const [BlogData,setBlogData] = useState([blogList])
	
	return (
		<>
		  <Head>
				<title>Blog | IFAD Multi-product</title>
			</Head>
			<section className={BlogStyle.background}>
				<img src="../blog.jpg" alt="" className={BlogStyle.bgimg}/>
				<div className={BlogStyle.blog}>
				<h1 className="text-center pt-5 pb-3 text-light font-Corda display-1">Blogs</h1>
				</div>
				<div className="container">
					<AllBlog sendBlog={BlogData} />
				</div>
			</section>
		</>
	);
};

export async function getStaticProps() {
  const blogList = (await getBlog()) || [];
  return {
    props: { 
      blogList
     },
    revalidate: 10 
  };
}

export default Blog;
