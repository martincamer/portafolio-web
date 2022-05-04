import React, { useState } from 'react';
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div className="text-[30px] font-bold cursor-pointer">Martin Camer</div>

			{/* menu */}
			<div className="hidden md:flex">
				<ul className="hidden md:flex">
					<li className=" text-xl font-bold hover:text-pink-600 hover: transition-all hover:duration-300 ">
						<Link to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className=" text-xl font-bold hover:text-pink-600 hover: transition-all hover:duration-300 ">
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className=" text-xl font-bold hover:text-pink-600 hover: transition-all hover:duration-300 ">
						<Link to="skills" smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li className=" text-xl font-bold hover:text-pink-600 hover: transition-all hover:duration-300 ">
						<Link to="work" smooth={true} duration={500}>
							Work
						</Link>
					</li>
					<li className=" text-xl font-bold hover:text-pink-600 hover: transition-all hover:duration-300 ">
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>

			{/* hamburguer */}

			<div
				onClick={handleClick}
				className="md:hidden z-10 cursor-pointer transition-all"
			>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className="py-6 text-4xl hover:text-pink-600">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl hover:text-pink-600">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl hover:text-pink-600">
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl hover:text-pink-600">
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className="py-6 text-4xl hover:text-pink-600">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* social icons */}
			<div className="hidden lg:flex fixed flex-column top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
						<a
							className="flex justify-between items-center w-full text-gray-300 font-bold"
							href="https://www.linkedin.com/in/martin-camer-115651201/"
						>
							Linkedin
							<FaLinkedin size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 ">
						<a
							className="flex justify-between items-center w-full text-gray-300 font-bold"
							href="https://github.com/martincamer"
						>
							GitHub
							<FaGithub size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500 ">
						<a
							className="flex justify-between items-center w-full text-gray-300 font-bold"
							href="/"
						>
							Email
							<HiOutlineMail size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
						<a
							className="flex justify-between items-center w-full text-gray-300 font-bold"
							href="/"
						>
							Facebook
							<FaFacebook size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 ">
						<a
							className="flex justify-between items-center w-full text-gray-300 font-bold"
							href="/"
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
