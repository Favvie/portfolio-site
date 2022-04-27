import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import REACT from "../assets/react.png";
import GITHUB from "../assets/github.png";
import TAILWIND from "../assets/tailwind.png";
import SkillCard from "../atoms/SkillCard";
const Skills = () => {
	return (
		<div id="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen ">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
				<div>
					<h1 className="font-bold border-b-4 inline border-pink-600  text-4xl">
						Skills
					</h1>
					<p className="py-4">These are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
					<SkillCard skill="HTML" img={HTML} />
					<SkillCard skill="CSS" img={CSS} />
					<SkillCard skill="JAVASCRIPT" img={JavaScript} />
					<SkillCard skill="REACT" img={REACT} />
					<SkillCard skill="GITHUB" img={GITHUB} />
					<SkillCard skill="TAILWIND" img={TAILWIND} />
				</div>
			</div>
		</div>
	);
};

export default Skills;
