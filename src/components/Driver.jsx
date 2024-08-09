import { Fragment } from 'react';

import data from './data.json';

export default function Example() {

	return (
		<>
			<div className="mx-1 mt-20 flex flex-wrap items-center justify-center gap-8 gap-x-11 sm:gap-4 sm:gap-x-12">
				{data.map(item =>{

					const classNameBG = item.team_name === 'Red Bull Racing' ? "bg-[#3671c6]" : "" || item.team_name === 'McLaren' ? "bg-[#ff8000]" : "" || item.team_name === 'Ferrari' ? "bg-[#e80020]" : "" || item.team_name === 'Mercedes' ? "bg-[#27f4d2]" : "" || item.team_name === 'Aston Martin' ? "bg-[#229971]" : "" || item.team_name === 'Haas' ? "bg-[#b6babd]" : "" || item.team_name === 'RB' ? "bg-[#6692ff]" : "" || item.team_name === 'Alpine' ? "bg-[#0093cc]" : "" || item.team_name === 'Williams' ? "bg-[#64c4ff]" : "" || item.team_name === 'Kick Sauber' ? "bg-[#87d68a]" : ""

					const classNameB = item.team_name === 'Red Bull Racing' ? "hover:border-[#3671c6]" : "" || item.team_name === 'McLaren' ? "hover:border-[#ff8000]" : "" || item.team_name === 'Ferrari' ? "hover:border-[#e80020]" : "" || item.team_name === 'Mercedes' ? "hover:border-[#27f4d2]" : "" || item.team_name === 'Aston Martin' ? "hover:border-[#229971]" : "" || item.team_name === 'Haas' ? "hover:border-[#b6babd]" : "" || item.team_name === 'RB' ? "hover:border-[#6692ff]" : "" || item.team_name === 'Alpine' ? "hover:border-[#0093cc]" : "" || item.team_name === 'Williams' ? "hover:border-[#64c4ff]" : "" || item.team_name === 'Kick Sauber' ? "hover:border-[#87d68a]" : ""

					const location = item.location === '0' ? "right-10" : "" || item.location === '1' ? "right-12" : "" || item.location === '2' ? "right-6" : "" || item.location === '3' ? "right-14" : "" || item.location === '4' ? "right-16" : ""

					return (
						<div id="llave" key={item.key}>
						<section
							className={`relative bottom-20 mt-8 flex h-[26.41rem] w-[26rem] flex-col rounded-xl rounded-ee-none rounded-ss-none border-r-2 border-t-2 pr-4 pt-4 duration-150 hover:bottom-[3.9rem] hover:mt-[-1.1rem] hover:h-[27.5rem] hover:pt-[2rem] ${classNameB}`}
						>
							<div className="flex justify-between">
								<div className="flex">
									<div className={` h-9 w-1 ${classNameBG}`}></div>
									<div className="relative bottom-1 mb-6 ml-3 h-9">
										<p>{item.first_name}</p>
										<p className="font-black">{item.last_name}</p>
									</div>
								</div>
								<img className="h-9 rounded border-[1px]" src={item.country} alt={item.nameC} />
							</div>
							<hr className="w-auto text-white" />
							<div>
								<p>{item.team_name}</p>
								<div className="flex items-end">
									<img
										className="relative right-2 top-1 h-20"
										src={item.driver_number_img}
										alt={item.driver_number}
									/>
									<img
										className={`relative ${location} h-80`}
										src={item.headshot_url}
										alt={item.full_name}
									/>
								</div>
							</div>
						</section>
					</div>
					)
				})}
			</div>
		</>
	);
}
