import { Fragment, useState } from 'react';

import data from './data.json';

export default function Example() {
	const prueba = data.map((item)=> item.color)
	const [color] = useState("blue");
	const test = "bg-blue-500";
	const[color2] = useState("green");
	const test2 = "hover:border-green-400";
	const prueba2 = document.getElementById("llave")
	console.log(prueba2)


	return (
		<>
			<div className="mx-1 mt-20 flex flex-wrap items-center justify-center gap-8 gap-x-11 sm:gap-4 sm:gap-x-12">
				
				{data.map((item) => (
					<div id='llave' key={item.key}>
						<section className={`relative bottom-20 mt-8 flex h-[26.41rem] w-[26rem] flex-col rounded-xl rounded-ee-none rounded-ss-none border-r-2 border-t-2 pr-4 pt-4 duration-150 hover:bottom-[3.9rem] hover:mt-[-1.1rem] hover:h-[27.5rem] hover:border-${color2}-400 hover:pt-[2rem]`}>
							<div className="flex justify-between">
								<div className="flex">
									<div className={`h-9 w-1 bg-${color}-500`}></div>
									<div className="relative bottom-1 mb-6 ml-3 h-9">
										<p>{item.first_name}</p>
										<p className="font-black">{item.last_name}</p>
									</div>
								</div>
								<img className="h-9" src={item.country} alt={item.nameC} />
							</div>
							<hr className="w-auto text-white" />
							<div>
								<p>{item.team_name}</p>
								<div className="flex items-end">
									<img
										className="relative right-2 top-2 h-20"
										src={item.driver_number_img}
										alt={item.driver_number}
									/>
									<img
										className="relative right-10 h-80"
										src={item.headshot_url}
										alt={item.full_name}
									/>
								</div>
							</div>
						</section>
					</div>
				))}
			</div>
		</>
	);
}
