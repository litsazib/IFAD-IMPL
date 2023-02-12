import Slider from 'react-slick';
import awordCss from '../../../../styles/Award.module.scss';
import Card from 'react-bootstrap/Card';

const PageBlog = ({ sendawardData }) => {

	const awardContent = sendawardData?.content_item
	const awardContentLoop = awardContent?.map((ctx,idx)=>{
			return (
					<>
						<div className="px-3 pb-5" key={idx}>
						<div className={awordCss.awardItem}>
						<Card.Img variant="top" className={awordCss.imgheight} src={ctx.item_image} />
						<Card.Body className={awordCss.awardText}>
							<h4 className={awordCss.name}>{ctx.item_name}</h4>
							<p className={awordCss.possition}>{ctx.item_short_desc}</p>
							<p className={awordCss.possition}>become one of the</p>
							<h4 className={awordCss.name}>{ctx.item_long_desc}</h4>
						</Card.Body>
						</div>
						</div>
					</>
			)
})

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	};
	return (
		<>

			<Slider {...settings}>
					{awardContentLoop}
			</Slider>


		</>
	);
};

export default PageBlog;
