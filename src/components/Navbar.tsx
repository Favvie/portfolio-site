import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import SocialIcons from "../atoms/SocialIcons";

const Navbar = () => {
	const [nav, setNav] = useState<boolean>(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div>
				<img src={Logo} alt="Logo" style={{ width: "50px" }} />
			</div>

			{/* main menu */}
			<ul className="md:flex hidden">
				<li>
					<Link to="home" smooth={true} offset={50} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} offset={50} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} offset={50} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="work" smooth={true} offset={50} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} offset={50} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 flex flex-col justify-center bg-[#0a192f]  w-full h-screen items-center"
				}
			>
				<li className="py-4 text-4xl">
					<Link
						to="home"
						onClick={handleClick}
						smooth={true}
						offset={50}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className="py-4 text-4xl">
					<Link
						to="about"
						onClick={handleClick}
						smooth={true}
						offset={50}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="py-4 text-4xl">
					<Link
						to="skills"
						onClick={handleClick}
						smooth={true}
						offset={-50}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className="py-4 text-4xl">
					<Link
						to="work"
						onClick={handleClick}
						smooth={true}
						offset={-80}
						duration={500}
					>
						Work
					</Link>
				</li>
				<li className="py-4 text-4xl">
					<Link
						to="contact"
						onClick={handleClick}
						smooth={true}
						offset={-50}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* social icons */}
			<div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<SocialIcons
						href="https://www.linkedin.com/in/favour-abangwu-b3a551a6/"
						iconTitle="LinkedIn"
						icon={<FaLinkedin size={30} />}
						color="bg-blue-500"
					/>
					<SocialIcons
						href="https://github.com/Favvie"
						iconTitle="GitHub"
						icon={<FaGithub size={30} />}
						color="bg-[#333333]"
					/>
					<SocialIcons
						href="mailto:favourabangwu@gmail.com"
						iconTitle="Email"
						icon={<HiOutlineMail size={30} />}
						color="bg-[#6fc2b0]"
					/>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a
							href="../file/favour_abangwu.pdf"
							download
							className="flex justify-between items-center w-full text-gray-300"
						>
							Resume
							<BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
