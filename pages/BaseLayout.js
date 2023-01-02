
import Navbar from "../components/Navbar"

export default function BaseLayout({ children }){
	return(
		<div>
	        <Navbar />
		    {children}
		  </div>
	);
}
