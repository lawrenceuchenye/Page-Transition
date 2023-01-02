import { motion as m } from "framer-motion";

export default function contact() {
	return (
		<m.div
			initial={{ y: "100%" }}
			animate={{ y: "0%" }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 px-16"
		>
			<div className="my-96 p-1 overflow-hidden">
				<m.h1
					initial={{ y: "100%" }}
					animate={{ y: "0%" }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="text-6xl text-center lg:text-right lg:text-9xl"
				>
					Let's talk
				</m.h1>
			</div>
			<div className="flex gap-40 justify">
				<div className="lg:text-2xl text-base">
					<h4>Find me:</h4>
				</div>
				<div className="lg:text-6xl text-2xl underline">
					<ul>
						<li className="pb-2">Twitter</li>
						<li className="pb-2">Instagram</li>
						<li className="pb-2">LinkedIn</li>
						<li className="pb-2">Whatsapp</li>
					</ul>
				</div>
			</div>
		</m.div>
	);
}
