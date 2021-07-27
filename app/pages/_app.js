import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
function MyApp({ Component, pageProps }) {
  return ( 
  <>
  <Component {...pageProps} /> <script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
  crossOrigin="anonymous"></script>
  </>
  )
}

export default MyApp
