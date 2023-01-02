import Navbar from "../components/Navbar";
import Head from "next/head";

export default function BaseLayout({ children }) {
	return (
		<div className="py-24 px-12 lg:px-48">
			<Head>
				<style>
					{" "}
					@import
					url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');{" "}
				</style>
			</Head>
			<Navbar />
			{children}
		</div>
	);
}
