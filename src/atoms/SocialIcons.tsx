import React, { ReactSVGElement } from "react";

interface Props {
	href: string;
	iconTitle: string;
	color: string;
	icon: React.ReactNode;
	// children: Element | Element[];
}
const SocialIcons = ({ href, iconTitle, icon, color }: Props) => {
	return (
		<li
			className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${color}`}
		>
			<a
				target="_blank"
				href={href}
				className="flex justify-between items-center w-full text-gray-300"
				rel="noopener noreferrer"
			>
				{iconTitle}
				{icon}
			</a>
		</li>
	);
};

export default SocialIcons;
