import Link from 'next/link'

const Csr = ({sendsocialResData}) => {

    const CsrContent = sendsocialResData?.content_item
    const CsrContentLoop = CsrContent?.map((ctx,idx)=>{
        return (
            <>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="card rounded-0 shadow-lg p-3 bg-body border-0">
                <Link href={ctx.item_link?ctx.item_link:"http://google.com"}>
                    <a>
                        <img src={ctx.item_image}style={{objectFit: 'cover'}}className="card-img-top rounded-0 card-height img-fluid"alt="..."/>
                    </a>
                </Link>
                <div className="card-body"style={{height: '112px'}}>
                    <Link href={ctx.item_link?ctx.item_link:"http://google.com"}>
                        <a>
                            <h5 className="card-title">{ctx.item_name} </h5>
                        </a>
                    </Link>
                    <p className="card-text">{ctx.item_date}</p>
                </div>
                </div>
            </div>
            </>
        )
	})


    return (
        <>
            <section className='mb-5'>
                <p className="display-1 mt-5 mb-5 text-center fw-bold text-warning">
                    {sendsocialResData?.module_description}
                </p>
                <div className="container">
                    <div className="row g-4">
                        {CsrContentLoop?CsrContentLoop:<h1 className='text-center'>Loading...</h1>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Csr;
