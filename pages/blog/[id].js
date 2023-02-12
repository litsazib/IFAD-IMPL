import BlogProductDetails from '../../components/Layouts/blogproduct/BlogProductDetails';
import BlogProductDetailsBg from '../../components/Layouts/blogproduct/BlogProductDetailsBg';

import { getBlogDetails,getBlog} from '../api/';
import { useEffect, useState } from 'react';

const BlogDetails = ({blogDetails}) => {

	const [RecentBlog,setRecentBlog] = useState([])
	const RecentBlogclone = RecentBlog.slice(0, 3);

	useEffect(()=>{
		try {
			getBlog().then((Result)=>{
				setRecentBlog(Result)
		})
		} catch (error) {
				console.log(error)
		}
	},[])

	return (
		<>
			<BlogProductDetailsBg sendBlogData={blogDetails[0]} />
			<BlogProductDetails sendBlogData={blogDetails[0]} recentBlogData={RecentBlogclone} />
		</>
	);
};

export async function getServerSideProps(context) {
  const blogDetails = (await getBlogDetails(context.params.id) || []);
  return {
    props: {
      blogDetails
    } 
  }
}

export default BlogDetails;
