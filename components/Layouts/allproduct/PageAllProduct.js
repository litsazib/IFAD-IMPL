import $ from 'jquery';
import React, { useEffect, useState, useRef } from 'react';
import 'animate.css';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { getcotentModule } from '../../../pages/api/';

const PageAllProduct = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		try {
			let moduleId = 15; // module id = Home->Product-Slider
			getcotentModule(moduleId).then((Result) => {
				setPrdSlider(Result);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	const [PrdSlider, setPrdSlider] = useState([]);
	const slideItem = PrdSlider[0]?.content_item.map((ctx, idx) => {
		return (
				<div className="textHeading" data-index={idx} key={idx} title={ctx.item_name}>
					<div className="slideWrap">
						<div className="lifeStlePrd">
							<img className="lifeStyle" src={ctx.item_banner} alt="lifeStyle-Image" />
							<div className="single_prd">
								<img className="productCenterImg" src={ctx.item_image} alt="product" />
							</div>
						</div>

						<div className="prdTxt">
							<h1 className="IndicatiorTxt">{ctx.item_name}</h1>
							<h1 className="prdTitle">{ctx.item_short_desc}</h1>
							<p className="prdDesc">{ctx.item_long_desc}</p>
							
							<Link href="/product" >
								<a className='all-product-button all-button-style'>
									All Product <AiOutlineArrowRight/>
								</a>
							</Link>
						</div>
					</div>
				</div>
		);
	});

	const settings = {
		dots: true,
		infinite: true,
		fade: true,
		speed: 500,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		dotsClass: 'custom-dots',
		beforeChange: (prev, next) => {
			setTimeout(() => {
				let element = $('.slick-active');
				if (element) {
					// $('.lifeStyle').addClass('animate__animated animate__fadeInLeft')
					$('.productCenterImg').addClass('animate__animated animate__fadeInDown');
					$('.prdTitle').addClass('animate__animated animate__slideInDown');
					$('.prdDesc').addClass('animate__animated animate__fadeInUp');
				}
				setIndex(next);
			}, 0);
		},
		afterChange: (index) => {
			setTimeout(() => {
				let element = $('.slick-active');
				if (element) {
					// $('.lifeStyle').removeClass('animate__animated animate__fadeInLeft')
					$('.productCenterImg').removeClass('animate__animated animate__fadeInDown');
					$('.prdTitle').removeClass('animate__animated animate__slideInDown');
					$('.prdDesc').removeClass('animate__animated animate__fadeInUp');
				}
			}, 0);
		},
		customPaging: function (i) {
			return <button style={{ fontSize: '11px' }}>{`${PrdSlider[0]?.content_item[i].item_name}`}</button>;
		},
	};

	return (
		<>
			<div className="highlightProduct" style={{ backgroundColor: `${PrdSlider[0]?.module_color}` }}>
				<Slider {...settings} className="customSlick" id="slides">
					{slideItem}
				</Slider>
			</div>
		</>
	);
};

export default PageAllProduct;
