import React from 'react';
import {
	DiReact,
	DiHtml5,
	DiJavascript,
	DiCss3,
	DiAndroid,
	DiAngularSimple,
	DiNodejs,
} from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const SkillsTwo = () => {
	return (
		<div className="w-full h-full bg-[#0a192f] text-[#ffff] ">
			<div className="max-w-[1000px] mx-auto p-4 w-full h-full ">
				<div className="mx-auto">
					<p className="text-4xl font-bold border-b-4 inline border-pink-600">
						Skills Progress
					</p>
					<p className="py-4 text-xl font-bold">
						// I leave you a list of my skills.
					</p>
				</div>
			</div>
			{/* Aqui van las Progress Skills */}
			<div className="progress flex content-center  items-center justify-center mx-auto flex-col h-full my-3">
				<div className="progress-one py-3 flex items-center gap-3">
					<p className=" text-xl font-bold border-b-4 border-pink-600">
						HTML - 95%
					</p>
					<DiHtml5 className="text-[50px] bg-pink-500 rounded-3xl p-1"></DiHtml5>
				</div>
				<div className="w-[70%] mx-3 px-6">
					<div className="border-2 border-pink-600 w-full rounded-xl">
						<div className="border-4 rounded-xl w-[95%] bg-white flex justify-end">
							<p className="text-pink-600 font-bold text-xl">95%</p>
						</div>
					</div>
				</div>
			</div>

			<div className="progress flex content-center  items-center justify-center mx-auto flex-col h-full my-3">
				<div className="progress-one py-3 flex gap-3 items-center">
					<p className=" text-xl font-bold border-b-4 border-pink-600 ">
						CSS - 80%
					</p>
					<DiCss3 className="text-[50px] bg-pink-500 rounded-3xl p-1"></DiCss3>
				</div>
				<div className="w-[70%] mx-3 px-6">
					<div className="border-2 border-pink-600 w-full rounded-xl">
						<div className="border-4 rounded-xl w-[80%] bg-white flex justify-end">
							<p className="text-pink-600 font-bold text-xl">80%</p>
						</div>
					</div>
				</div>
			</div>

			<div className="progress flex content-center  items-center justify-center mx-auto flex-col h-full my-3">
				<div className="progress-one py-3 flex gap-3 items-center">
					<p className=" text-xl font-bold border-b-4 border-pink-600">
						TAILWIND - 90%
					</p>
					<SiTailwindcss className="text-[50px] bg-pink-500 rounded-3xl p-1"></SiTailwindcss>
				</div>
				<div className="w-[70%] mx-3 px-6">
					<div className="border-2 border-pink-600 w-full rounded-xl">
						<div className="border-4 rounded-xl w-[69%] bg-white flex justify-end">
							<p className="text-pink-600 font-bold text-xl">69%</p>
						</div>
					</div>
				</div>
			</div>

			<div className="progress flex content-center  items-center justify-center mx-auto flex-col h-full my-3">
				<div className="progress-one py-3 flex gap-3 items-center">
					<p className=" text-xl font-bold border-b-4 border-pink-600">
						JAVASCRIPT - 78%
					</p>
					<DiJavascript className="text-[50px] bg-pink-500 rounded-3xl p-1"></DiJavascript>
				</div>
				<div className="w-[70%] mx-3 px-6">
					<div className="border-2 border-pink-600 w-full rounded-xl">
						<div className="border-4 rounded-xl w-[78%] bg-white flex justify-end">
							<p className="text-pink-600 font-bold text-xl">78%</p>
						</div>
					</div>
				</div>
			</div>

			<div className="progress flex content-center  items-center justify-center mx-auto flex-col h-full my-3">
				<div className="progress-one py-3 flex items-center gap-3">
					<p className=" text-xl font-bold border-b-4 border-pink-600">
						REACT - 72%
					</p>
					<DiReact className="text-[50px] bg-pink-500 rounded-3xl p-1"></DiReact>
				</div>
				<div className="w-[70%] mx-3 px-6">
					<div className="border-2 border-pink-600 w-full rounded-xl">
						<div className="border-4 rounded-xl w-[72%] bg-white flex justify-end">
							<p className="text-pink-600 font-bold text-xl">72%</p>
						</div>
					</div>
				</div>
			</div>

			<div className="progress flex content-center  items-center justify-center mx-auto flex-col h-full my-3">
				<div className="progress-one py-3 flex gap-3 items-center">
					<p className=" text-xl font-bold border-b-4 border-pink-600">
						VUE - 69%
					</p>
					<FaVuejs className="text-[50px] bg-pink-500 rounded-3xl p-1"></FaVuejs>
				</div>
				<div className="w-[70%] mx-3 px-6">
					<div className="border-2 border-pink-600 w-full rounded-xl">
						<div className="border-4 rounded-xl w-[69%] bg-white flex justify-end">
							<p className="text-pink-600 font-bold text-xl">69%</p>
						</div>
					</div>
				</div>
			</div>

			<div className="progress flex content-center  items-center justify-center mx-auto flex-col h-full my-3">
				<div className="progress-one py-3 flex gap-3 items-center">
					<p className=" text-xl font-bold border-b-4 border-pink-600">
						ANGULAR -60%
					</p>
					<DiAngularSimple className="text-[50px] bg-pink-500 rounded-3xl p-1"></DiAngularSimple>
				</div>
				<div className="w-[70%] mx-3 px-6">
					<div className="border-2 border-pink-600 w-full rounded-xl">
						<div className="border-4 rounded-xl w-[60%] bg-white flex justify-end">
							<p className="text-pink-600 font-bold text-xl">60%</p>
						</div>
					</div>
				</div>
			</div>

			<div className="progress flex content-center  items-center justify-center mx-auto flex-col h-full py-3">
				<div className="progress-one py-3 flex gap-3 items-center">
					<p className=" text-xl font-bold border-b-4 border-pink-600">
						NODE JS -70%
					</p>
					<DiNodejs className="text-[50px] bg-pink-500 rounded-3xl p-1"></DiNodejs>
				</div>
				<div className="w-[70%]  mx-3 px-6">
					<div className="border-2 border-pink-600 w-full rounded-xl">
						<div className="border-4 rounded-xl w-[70%] bg-white flex justify-end">
							<p className="text-pink-600 font-bold text-xl">70%</p>
						</div>
					</div>
				</div>
			</div>
			{/* Fin de las Progress Skills */}
		</div>
	);
};

export default SkillsTwo;
