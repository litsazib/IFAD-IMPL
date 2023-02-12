import ImageCard from '../../../styles/Blog.module.scss';
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { limitTxt } from '../../../utils/common.js';

const PageBlog = ({ Blog }) => {
	const BlogCard = Blog.map((card, idx) => {
		const { id, blog_image, blog_name, blog_short_desc } = card;

		return (
			<div className="p-3" key={id}>
				<Card className="side-padding rounded-0 mb-5">
					<Card.Img variant="top" className={ImageCard.imgheight} src={blog_image} alt={blog_name} />
					<Card.Body>
						<Card.Title className="font-Corda fs-3 card-font text-capitalize">{blog_name}</Card.Title>
						<Card.Text className="font-calibri text-capitalize">{limitTxt(blog_short_desc.toString(), 100)}</Card.Text>
						<Link href={`/blog/${id}`} passHref>
							<Button variant="" className="text-warning font-Corda text-capitalize ps-0">
								Read More
							</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		);
	});

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Slider {...settings}>{BlogCard}</Slider>
		</>
	);
};

export default PageBlog;
