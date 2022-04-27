import React from "react";
interface Props {
	projectPhoto: string;
	projectLink: string;
	projectCode: string;
	projectDescription: string;
}
const ProjectCard = ({
	projectPhoto,
	projectLink,
	projectCode,
	projectDescription,
}: Props) => {
	return (
		<div
			style={{ backgroundImage: `url(${projectPhoto})` }}
			className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center"
		>
			{/* hover  */}

			<div className="opacity-0 group-hover:opacity-100">
				<span className="text-2xl font-bold text-white tracking-wider">
					{projectDescription}
				</span>
				<div className="pt-8 text-center">
					<a href={projectLink}>
						<button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
							Demo
						</button>
					</a>
					<a href={projectCode}>
						<button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
							Code
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
