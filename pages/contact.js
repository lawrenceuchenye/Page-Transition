import { motion as m } from "framer-motion";

export default function contact() {
	const container = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: {
			y: "100%",
		},
		show: {
			y: "0%",
			transition: {
				duration: 0.5,
			},
		},
	};

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
					<m.ul variants={container} initial="hidden" animate="show">
						<div className="overflow-hidden">
							<m.li variants={item} className="pb-2">
								Twitter
							</m.li>
						</div>
						<div className="overflow-hidden">
							<m.li variants={item} className="pb-2">
								Instagram
							</m.li>
						</div>
						<div className="overflow-hidden">
							<m.li variants={item} className="pb-2">
								LinkedIn
							</m.li>
						</div>
						<div className="overflow-hidden">
							<m.li variants={item} className="pb-2">
								Whatsapp
							</m.li>
						</div>
					</m.ul>
				</div>
			</div>
		</m.div>
	);
}
