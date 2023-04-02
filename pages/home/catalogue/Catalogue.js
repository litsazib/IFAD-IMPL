import React from 'react';
import Link from 'next/link';
import Cataloguebg from '../../../styles/Catalogue.module.scss';

import { getDocuments } from '../../api/';
import { useEffect, useState } from 'react';

const Catalogue = () => {
	const [fileUrl, setfileUrl] = useState([]);
	const [Loading, setLoading] = useState(true);
	const GlobalCatalog = fileUrl?.find((catagory)=>{
		return catagory.category_name === "Catalogue"
	})
	const cataglogBtn = GlobalCatalog?.all_documents?.map((ctx, idx) => {
		return (
			<div className="container"  key={idx}>
			<div className="col-lg-3 cat-position">
					<div className="d-flex flex-column bd-highlight mb-3">
						<Link href={ctx.document_file} passHref>
							<a target="_blank" className={Cataloguebg.button}>
								{ctx.document_name}
							</a>
						</Link>
				</div>
			</div>
			</div>
		);
	});

	useEffect(() => {
		try {
			getDocuments().then((Result) => {
				setfileUrl(Result);
				setLoading(false);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<section id="catalogue" className={Cataloguebg.bg}>
			<div className="text-center">{cataglogBtn}</div>
		</section>
	);
};

export default Catalogue;
