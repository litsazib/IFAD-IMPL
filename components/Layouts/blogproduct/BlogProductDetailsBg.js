import BlogProductStyle from '../../../styles/Blog.module.scss'

import BeatLoader from "react-spinners/BeatLoader";
import Head from 'next/head';

const BlogProductDetails = ({sendBlogData}) => {
  // const bgImg={
  //   backgroundImage: `url(${sendBlogData.blog_banner_image})`,
  // };
  return (
    <>
    <Head>
      <title>Blog | IFAD Multi-product</title>
    </Head>
        <section className={BlogProductStyle.productbg} >
        <img src={sendBlogData.blog_banner_image} alt="" className={BlogProductStyle.bgimg}/>
            <div className={BlogProductStyle.image}>
                <h1 className='display-1 fw-bold'>
                  {
                    sendBlogData?.blog_name?sendBlogData?.blog_name
                    :<BeatLoader color="#FA3" />
                  }
                </h1>
            </div>
        </section>
    </>
  )
}

export default BlogProductDetails