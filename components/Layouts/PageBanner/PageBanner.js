import Carousel from 'react-bootstrap/Carousel';
import Bannerstyle from '../../../styles/Banner.module.scss';

const PageBanner = ({sliderImg}) => {

const slideloop = sliderImg?.content_item.map((slide,idx)=>{
		return (
			<Carousel.Item className={Bannerstyle.height} key={idx}>
				<img className={Bannerstyle.img} src={slide.item_image} alt="First slide" />
			</Carousel.Item>
		)
})

	return (
		<>
			<Carousel fade  className="">
				{
					slideloop?slideloop
					:
					<Carousel.Item className={Bannerstyle.height}>
						<img className={Bannerstyle.img} src="../slider/sliderone.jpg" alt="First slide" />
					</Carousel.Item>
				}
			</Carousel>
		</>
	);
};

export default PageBanner;
