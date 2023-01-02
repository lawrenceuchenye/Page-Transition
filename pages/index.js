import { motion as m } from "framer-motion";

export default function Home() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
		    className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100"
		>
			<main>
				<div className="my-96 p-1">
					<h1 className="text-6xl text-center lg:text-right lg:text-9xl">
						Happy Pickle
					</h1>
				</div>
				<div className="flex justify-between">
					<div>
						<h2>Design</h2>
						<h2>Company</h2>
						<h2>2023</h2>
					</div>
					<div>
						<h2>This pickle is gonna make you smile</h2>
						<h2>Scottish design to make you happy</h2>
						<h2>Click contact for cool transition</h2>
					</div>
				</div>
			</main>
		</m.div>
	);
}
