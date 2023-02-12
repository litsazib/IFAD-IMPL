import Link from 'next/link';

const AllBlog = ({sendBlog}) => {

	const BlogList = sendBlog[0]?.map((ctx,idx)=>{
		const {id,blog_name,blog_image,blog_banner_image,blog_author,blog_date} = ctx
		return (
				<div className="col-xl-3 col-lg-4 col-md-6 mt-4" key={idx}>
					<div className="card rounded-0 shadow-lg p-3 bg-body border-0">
						<Link href={`/blog/${id}`}>
							<a>
								<img
									src={blog_image}
									className="card-img-top rounded-0 card-height img-fluid"
									alt="..."
								/>
							</a>
						</Link>
						<div className="card-body" style={{ height: '112px' }}>
							<Link href={`/blog/${id}`}>
								<a>
									<h5 className="card-title">{blog_name}</h5>
								</a>
							</Link>
							<p className="card-text">Author: {blog_author}</p>
							<p className="card-text">Sate: {blog_date}</p>
						</div>
					</div>
				</div>
		)
	})

	return (
		<>
			<div className="row">
				{BlogList}
			</div>
		</>
	);
};

export default AllBlog;
