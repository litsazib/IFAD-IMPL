import Link from 'next/link';
import Footerstyle from '../../../styles/Footer.module.scss';
import Card from 'react-bootstrap/Card';


const SocialCard = ({ sendSocialDta }) => {
	return (
		<>
			{sendSocialDta[0]?.content_item.map((curElem, idx) => {
				return (
						<div className="col-lg-3 col-md-3 col-sm-6 mb-4 social_box" key={idx}>
							<Card className=" rounded-0 mb-3">
								<Link href={curElem.item_link} passHref>
									<a target="_blank">
										<Card.Img variant="top" src={curElem.item_image} className="rounded-0 footer-social-img" />
									</a>
								</Link>								
							</Card>
							<div className='d-flex justify-content-between'>
							<iframe
										src={`https://www.facebook.com/plugins/like.php?href=${curElem.item_link}%2F&width=174&layout=button_count&action=like&size=large&share=true&height=46&appId`}
										className={Footerstyle.facebookbtn}
										allowFullScreen={true}
										allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
									></iframe>
							<p className='fcolor'>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
								<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
							</svg>
							{curElem.item_name}
							</p>
							</div>
						</div>
				);
			})}
		</>
	);
};

export default SocialCard;
