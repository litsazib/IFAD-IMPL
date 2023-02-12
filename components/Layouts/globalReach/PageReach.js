import Head from 'next/head';
import Link from 'next/link';

const PageReach = ({ sendGS,GlobalCatalog }) => {

	const cataglogBtn = GlobalCatalog?.all_documents?.map((ctx, idx) => {
		return (
			<Link href={ctx.document_file} passHref>
			<a className="btnViewSource border border-warning px-4 py-2 mt-3 mb-3 font-calibri fRight" target="_blank">
			{ctx.document_name}
			</a>
		</Link>
		);
	});

	let CountryList = sendGS?.content_item[0]?.item_long_desc;
	let country = CountryList?.split('-');

	let exportInof = sendGS?.content_item[0]?.item_short_desc;
	let exportInofData = exportInof?.split('-');

	return (
		<>
			<Head>
				<title>Global Reach | IFAD Multi-product</title>
			</Head>
			<section className="mt-5 global-reach">
				<div className="container">
					<div className="row">
						<p className="mt-5 text-center f20">{sendGS?.module_name}</p>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 mt-5 mb-5 pe-5">
							<div className="space text-start">
								<ul className="countryList align-middle list-unstyled map-border text-center text-uppercase">
									{country?.map((item, id) => {
										return <li key={id}>{item}</li>;
									})}
								</ul>
							</div>
							<div className="addressDiv">
								{exportInofData?.map((item, id) => {
									return <p key={id}>{item}</p>;
								})}
							</div>
						</div>
						<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
							<div className="space mt-5 mb-5">
								<img src={sendGS?.content_item[0]?.item_image} alt="" className="img-fluid map-size" />
							</div>
							{cataglogBtn}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PageReach;
