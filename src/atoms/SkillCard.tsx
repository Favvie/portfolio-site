import React from "react";
interface Props {
	skill: string;
	img: string;
}

const SkillCard = ({ skill, img }: Props) => {
	return (
		<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
			<img className="w-20 mx-auto" src={img} alt="html" />
			<p className="my-4">{skill}</p>
		</div>
	);
};

export default SkillCard;
