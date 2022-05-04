import React from 'react';
import {
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaLinkedinIn,
	FaTwitter,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
const AboutRedes = () => {
	return (
		<div className="sm:hidden  w-full  text-[#ffff] bg-[#0a192f]  h-[40vh]  py-4">
			<div className="container mx-auto">
				<div className="px-4 container mx-auto ">
					<p className="text-4xl inline font-bold border-b-4 border-pink-600 ">
						Social Media
					</p>
					<p className="py-4 text-xl font-bold">
						// Follow me on my social networks.{' '}
					</p>
				</div>
				<div className="flex gap-5 px-4 items-center text-center justify-center">
					<div className="text-5xl flex items-center ">
						<a href="https://github.com/martincamer">
							<FaGithub className="hover:scale-110 hover:duration-300 hover:text-gray-500"></FaGithub>
						</a>
					</div>

					<div className="text-5xl flex items-center ">
						<a href="/">
							<FaFacebook className="hover:scale-110 hover:duration-300 hover:text-blue-500"></FaFacebook>
						</a>
					</div>

					<div className="text-5xl flex items-center ">
						<a href="/">
							<FaTwitter className="hover:scale-110 hover:duration-300 hover:text-blue-500"></FaTwitter>
						</a>
					</div>

					<div className="text-5xl flex items-center ">
						<a href="https://www.linkedin.com/in/martin-camer-115651201/">
							<FaLinkedin className="hover:scale-110 hover:duration-300 hover:text-blue-500"></FaLinkedin>
						</a>
					</div>

					<div className="text-5xl flex items-center ">
						<a href="/">
							<HiOutlineMail className="hover:scale-110 hover:duration-300 hover:text-green-500"></HiOutlineMail>
						</a>
					</div>
				</div>
			</div>
			<div className="my-[30px] flex items-center content-center place-content-center">
				<ul>
					<li>
						<Link
							to="home"
							smooth={true}
							duration={500}
							href="#"
							className="text-xl font-bold hover:text-pink-600 hover:duration-300 py-3"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="about"
							smooth={true}
							duration={500}
							href="#"
							className="text-xl font-bold hover:text-pink-600 hover:duration-300 py-3"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="skills"
							smooth={true}
							duration={500}
							href="#"
							className="text-xl font-bold hover:text-pink-600 hover:duration-300 py-3"
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							to="work"
							smooth={true}
							duration={500}
							href="#"
							className="text-xl font-bold hover:text-pink-600 hover:duration-300 py-3"
						>
							Work
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							smooth={true}
							duration={500}
							href="#"
							className="text-xl font-bold hover:text-pink-600 hover:duration-300 py-3"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AboutRedes;
