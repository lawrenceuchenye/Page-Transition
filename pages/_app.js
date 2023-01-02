import '../styles/globals.css'
import BaseLayout from "./BaseLayout"

import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps ,router}) {
  return(
	  <BaseLayout>
	     <AnimatePresence initial={false} mode={'wait'}>
	       <Component key={router.pathname} {...pageProps} />
	      </AnimatePresence>
	  </BaseLayout>
  );
}

export default MyApp
