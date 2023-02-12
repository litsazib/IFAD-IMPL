import Head from 'next/head';
import { useState } from 'react';
import PageNews from '../../components/Layouts/newsEvent/PageNews';


import { getcotentModule } from '../api/';


const News = ({NewsEvents}) => {
    const [newsData, setnewsData] = useState(NewsEvents);
	return (
		<>
    	<Head>
				<title>News & Events | IFAD Multi-product</title>
			</Head>
			<PageNews sendNewsData={newsData[0]}/>
		</>
	)
}

export async function getStaticProps() {
	let ModuleId = 10;	//Media->News & Events
  const NewsEvents = (await getcotentModule(ModuleId)) || [];

  return {
    props: { 
      NewsEvents
     },
    revalidate: 10 
  };
}

export default News;
