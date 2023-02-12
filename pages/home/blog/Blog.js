import BlogStyle from '../../../styles/Blog.module.scss';
import PageBlog from '../../../components/Layouts/blog/PageBlog.js';
import BeatLoader from "react-spinners/BeatLoader";

import {getBlog} from '../../api/';
import { useEffect,useState } from 'react';

const Blog = () => {

	const [Blog,setBlog] = useState([])
	const [Loading,setLoading] = useState(true)

	useEffect(()=>{
		try {
			getBlog().then((Result)=>{
				setBlog(Result)
				setLoading(false)
			})
		} catch (error) {
			console.log(error)
		}
	},[])

	return (
		<>
			<section id="blog-slide" className={BlogStyle.background}>
				<h1 className="text-center pt-5 pb-3 text-light font-Corda display-1">Blogs</h1>
				<div className="container">
					{
						Loading?<BeatLoader color="#FA3" />
						:<PageBlog Blog={Blog}/>
					}
				</div>
			</section>
		</>
	);
};

export default Blog;
