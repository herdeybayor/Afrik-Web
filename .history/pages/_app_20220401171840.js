import '../styles/globals.css'
import Layout from '../components/layouts'

function MyApp({ Component, pageProps }) {


  return(
  <>
  <Layout>
  <Component {...pageProps} />

  </Layout>
  </>
  )
  
}

export default MyApp
