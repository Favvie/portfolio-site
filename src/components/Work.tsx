import React from "react";
import Car from "../assets/cars.png";
import Travel from "../assets/travel.png";
import Rental from "../assets/rentals.png";
import Drone from "../assets/drone.png";
import ProjectCard from "../atoms/ProjectCard";
import Afen from "../assets/afen.png";
import Food from "../assets/Food.png";

const Work = () => {
	return (
		<div id="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300 ">
			<div className="max-w-[1000px] p-4 flex flex-col justify-center  mx-auto w-full h-full">
				<div className="pb-8">
					<h1 className="text-4xl font-bold border-b-4 border-pink-600 inline">
						Work
					</h1>
					<p className="my-4">Check out some of my recent works</p>
				</div>

				{/* Grid container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<ProjectCard
						projectPhoto={Car}
						projectLink="https://favvie-cars.netlify.app/"
						projectCode="https://github.com/Favvie/react-router-with-framer-motion-animation"
						projectDescription="Cars Display"
					/>
					<ProjectCard
						projectPhoto={Travel}
						projectLink="https://favvie-travel-app.netlify.app/"
						projectCode="https://github.com/Favvie/react-website-v1"
						projectDescription="A travel app"
					/>
					<ProjectCard
						projectPhoto={Rental}
						projectLink="https://elixr-rentals.netlify.app/"
						projectCode="https://github.com/Favvie/elixr"
						projectDescription="Houses for shortletting"
					/>
					<ProjectCard
						projectPhoto={Afen}
						projectLink="https://afengroup.netlify.app/"
						projectCode="https://github.com/Favvie/afengroups"
						projectDescription="An NFT project"
					/>
					<ProjectCard
						projectPhoto={Drone}
						projectLink="https://drone-event.netlify.app/"
						projectCode="https://github.com/Favvie/drone-event-landing-page"
						projectDescription="A drones event landing page"
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
