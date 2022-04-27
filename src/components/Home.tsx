import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div id="home" className="w-full h-screen bg-[#0a192f] ">
			{/* container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen ">
				<p className="text-pink-600">Hi, my name is</p>
				<h1 className="text-[#ccd6f6] font-bold text-4xl sm:text-7xl">
					Favour Abangwu
				</h1>
				<h2 className="text-[#8892b0] font-bold text-4xl sm:text-7xl">
					A{" "}
					<span className="text-pink-600 border-b-4 border-pink-600">
						Frontend
					</span>{" "}
					Developer
				</h2>
				<p className="max-w-[700px] text-[#8892b0] py-8">
					I am a front-end developer specializing in building exceptional
					digital experiences. Currently, I'm focused on building responsive and
					beautiful web applications.
				</p>
				<div>
					<Link to="work" smooth={true} offset={50} duration={500}>
						<button className="flex group items-center text-white border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600">
							View Work
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-3 " />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
