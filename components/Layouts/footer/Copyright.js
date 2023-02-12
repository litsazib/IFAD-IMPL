import React,{useState, useEffect} from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Link from 'next/link';
import Footerstyle from '../../../styles/Footer.module.scss';

const Copyright = () => {

	const d = new Date();
	let year = d.getFullYear();

	// const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, [])

	const goToTop = () => {
		window.scrollTo({
				top: 0,
				behavior: "smooth",
		});
};

	return (
		<>
			<h3 className="font-noto m-0 py-4 display-5 text-center text-light font-calibri">
				© {year} IFAD Multi-product. All Rights Reserved | Developed by{' '}
				<Link href="http://api.net.bd" >
					<a target="_blank">
						<img src="../API-logo.png" style={{ width: '35px' }} alt=""  className='img-fluid'/>
					</a>
				</Link>
			</h3>

			{showTopBtn && (
				<Link href='/'>
					<a className={Footerstyle.back} role="button" onClick={goToTop} data-slide="next">
						<AiOutlineArrowUp className={Footerstyle.backtotop} />
					</a>
				</Link>
			)}
		</>
	);
};

export default Copyright;
