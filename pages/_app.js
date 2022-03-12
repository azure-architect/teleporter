import { useEffect } from 'react'
import '../styles/globals.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() =>{
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js")

  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
    
}

export default MyApp
