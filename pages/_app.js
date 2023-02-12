import Layout from '../pages/Layout';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";

import Router from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import { SSRProvider } from 'react-bootstrap';



function MyApp({ Component, pageProps }) {

  const [Loading,setLoading] = useState(false)

  Router.events.on('routeChangeStart',(url)=>{
    NProgress.start();
    setLoading(true)
  })
  Router.events.on('routeChangeComplete',(url)=>{
    NProgress.done();
    setLoading(false)
  })

  return(
    <>
     <SSRProvider>
    	<Head>
				<title>Ifad Multi-Product</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha512-bUg5gaqBVaXIJNuebamJ6uex//mjxPk8kljQTdM1SwkNrQD7pjS+PerntUSD+QRWPNJ0tq54/x4zRV8bLrLhZg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			</Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </SSRProvider>
    </>
  )
}

export default MyApp