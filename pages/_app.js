import '../styles/globals.css'
import BaseLayout from "./BaseLayout"

function MyApp({ Component, pageProps }) {
  return(
	  <BaseLayout>
	       <Component {...pageProps} />
	  </BaseLayout>
  );
}

export default MyApp
