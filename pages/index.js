import { motion as m } from "framer-motion";

export default function Home() {
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
			exit={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className="px-16 text-gray-900 absolute top-0 z-9 left-0 w-full h-full bg-orange-100"
		>
			<main>
				<div className="my-96 p-1 overflow-hidden">
					<m.h1
						initial={{ y: "100%" }}
						animate={{ y: "0%" }}
						transition={{ delay: 0.5, duration: 0.5 }}
						className="text-6xl text-center lg:text-right lg:text-9xl"
					>
						Happy Pickle
					</m.h1>
				</div>
				<div className="flex justify-between">
					<div>
						<div className="overflow-hidden">
							<h2>Design</h2>
						</div>
						<div className="overflow-hidden">
							<h2>Company</h2>
						</div>
						<div className="overflow-hidden">
							<h2>2023</h2>
						</div>
					</div>
					<m.div
						variants={container}
						initial="hidden"
						animate="show"
						className="overflow-hidden"
					>
						<div className="overflow-hidden">
							<m.h2 variants={item}>
								This pickle is gonna make you smile
							</m.h2>
						</div>
						<div className="overflow-hidden">
							<m.h2 variants={item}>
								Scottish design to make you happy
							</m.h2>
						</div>
						<div className="overflow-hidden">
							<m.h2 variants={item}>
								Click contact for cool transition
							</m.h2>
						</div>
					</m.div>
				</div>
			</main>
		</m.div>
	);
}
