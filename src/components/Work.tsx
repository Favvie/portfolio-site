import React from "react";
import Car from "../assets/cars.png";
import Travel from "../assets/travel.png";
import Rental from "../assets/rentals.png";
import AltSchool from "../assets/altschool.png";
import ProjectCard from "../atoms/ProjectCard";
import Afen from "../assets/afen.png";
import Food from "../assets/Food.png";
import Strive from "../assets/strive-mts.png";
import TempOwn from "../assets/tempown.png";
import Nexascale from "../assets/nexascale-asset.png";

const Work = () => {
	return (
		<div
			id="work"
			className="w-full md:h-screen bg-[#0a192f] text-gray-300 ">
			<div className="max-w-[1000px] p-4 flex flex-col justify-center  mx-auto w-full h-full">
				<div className="pb-8">
					<h1 className="text-4xl font-bold border-b-4 border-pink-600 inline">Work</h1>
					<p className="my-4">Check out some of my recent works</p>
				</div>

				{/* Grid container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<ProjectCard
						projectPhoto={TempOwn}
						projectLink="https://tempown-clone.vercel.app/"
						projectCode="https://github.com/Favvie/tempown-clone"
						projectDescription="Temporary Rental Service"
					/>

					<ProjectCard
						projectPhoto={Nexascale}
						projectLink="https://nexascale-asset.web.app/"
						projectCode="https://github.com/Favvie/"
						projectDescription="Nexascale asset management platform"
					/>
					<ProjectCard
						projectPhoto={Strive}
						projectLink="https://strive-mts.vercel.app/"
						projectCode="https://github.com/Favvie/project-mts"
						projectDescription="Project management system"
					/>

					<ProjectCard
						projectPhoto={AltSchool}
						projectLink="https://favour-abangwu-altschool-vue-exam.vercel.app/"
						projectCode="https://github.com/Favvie/altschool-vue-exam/"
						projectDescription="E-commerce web application with authentication"
					/>

					<ProjectCard
						projectPhoto={Car}
						projectLink="https://favvie-cars.netlify.app/"
						projectCode="https://github.com/Favvie/react-router-with-framer-motion-animation"
						projectDescription="Cars Display"
					/>
					<ProjectCard
						projectPhoto={Food}
						projectLink="https://deliciouss-recipes.netlify.app/"
						projectCode="https://github.com/Favvie/deliciousss"
						projectDescription="A recipe app for your needs"
					/>
				</div>
			</div>
		</div>
	);
};

export default Work;
