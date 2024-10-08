import { Fragment } from 'react';

import data from '../data/data.json';
import '../css/Cpilotos.css';

export default function Example() {
	return (
		<>
			<div className="mx-1 mt-20 flex flex-wrap items-center justify-center gap-8 gap-x-11 sm:gap-4 sm:gap-x-12">
				{data.map((item) => {
					const classNameBG =
						item.team_name === 'Red Bull Racing'
							? 'bg-[#3671c6]'
							: '' || item.team_name === 'McLaren'
								? 'bg-[#ff8000]'
								: '' || item.team_name === 'Ferrari'
									? 'bg-[#e80020]'
									: '' || item.team_name === 'Mercedes'
										? 'bg-[#27f4d2]'
										: '' || item.team_name === 'Aston Martin'
											? 'bg-[#229971]'
											: '' || item.team_name === 'Haas'
												? 'bg-[#b6babd]'
												: '' || item.team_name === 'RB'
													? 'bg-[#6692ff]'
													: '' || item.team_name === 'Alpine'
														? 'bg-[#0093cc]'
														: '' || item.team_name === 'Williams'
															? 'bg-[#64c4ff]'
															: '' || item.team_name === 'Kick Sauber'
																? 'bg-[#87d68a]'
																: '';

					const classNameB =
						item.team_name === 'Red Bull Racing'
							? 'hover:border-[#3671c6]'
							: '' || item.team_name === 'McLaren'
								? 'hover:border-[#ff8000]'
								: '' || item.team_name === 'Ferrari'
									? 'hover:border-[#e80020]'
									: '' || item.team_name === 'Mercedes'
										? 'hover:border-[#27f4d2]'
										: '' || item.team_name === 'Aston Martin'
											? 'hover:border-[#229971]'
											: '' || item.team_name === 'Haas'
												? 'hover:border-[#b6babd]'
												: '' || item.team_name === 'RB'
													? 'hover:border-[#6692ff]'
													: '' || item.team_name === 'Alpine'
														? 'hover:border-[#0093cc]'
														: '' || item.team_name === 'Williams'
															? 'hover:border-[#64c4ff]'
															: '' || item.team_name === 'Kick Sauber'
																? 'hover:border-[#87d68a]'
																: '';

					const Max = item.full_name === 'Max Verstappen' ? 'hidden' : 'flex';
					const Lec = item.full_name === 'Charles Leclerc' ? 'hidden' : 'flex';
					const Lan = item.full_name === 'Lando Norris' ? 'hidden' : 'flex';

					return (
						<div id="llave" key={item.key} className={`${Max} ${Lec} ${Lan} mt-2`}>
							<section
								className={`relative  flex 
									h-[4.1rem] hover:h-[5.1rem]
									w-[90vw] 
									rounded-xl rounded-ee-none rounded-ss-none border-r-2 border-t-2 pr-4 
									pt-4 hover:pt-[2rem]
									duration-150 
									sm:hover:bottom-[3rem] bottom-[4rem]
									mt-8 sm:hover:mt-[-0.1rem] 
									${classNameB}`}
							>
								<div id="parent" className="w-full flex justify-center">
										<div id="div1" className=''><div className={`h-9 w-1 ${classNameBG}`}></div></div>
										<div id="div2" className="font-black tracking-[0.0125rem] text-gray-100 text-2xl">{item.position}</div>
										<div id="div3"><div className="relative bottom-1 mb-6 ml-3 h-9">
											<p className="tracking-[0.0125rem] text-gray-100">{item.first_name}</p>
											<p className="font-black tracking-[0.0125rem] text-gray-100">
												{item.last_name}
											</p>
										</div> </div>
										<div id="div4" className="font-black tracking-[0.0125rem] text-gray-100 text-xl justify-center items-center hidden sm:flex"> {item.team_name}</div>
										<div id="div5" className="font-black tracking-[0.0125rem] text-gray-100 text-2xl flex justify-center items-center"> PTS {item.points}</div>
										<div id='div6'><img className="h-12 rounded ml-[40%] sm:ml-[10vw] border-[1px]" src={item.headshot_url} alt={item.nameC} /></div>
								</div>
							</section>
						</div>
					);
				})}
			</div>
		</>
	);
}