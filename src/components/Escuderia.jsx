import { Fragment } from 'react';

import data from '../data/escuderias.json';
import '../css/Escuderia.css'

export default function Example() {
	return (
		<>
			<div className="mx-1 mt-20 flex flex-wrap items-center justify-center gap-8 gap-x-11 sm:gap-4 sm:gap-x-12">
				{data.map((item) => {
					const classNameBG =
						item.name === 'Red Bull Racing'
							? 'bg-[#3671c6]'
							: '' || item.name === 'McLaren'
								? 'bg-[#ff8000]'
								: '' || item.name === 'Ferrari'
									? 'bg-[#e80020]'
									: '' || item.name === 'Mercedes'
										? 'bg-[#27f4d2]'
										: '' || item.name === 'Aston Martin'
											? 'bg-[#229971]'
											: '' || item.name === 'Haas'
												? 'bg-[#b6babd]'
												: '' || item.name === 'RB'
													? 'bg-[#6692ff]'
													: '' || item.name === 'Alpine'
														? 'bg-[#0093cc]'
														: '' || item.name === 'Williams'
															? 'bg-[#64c4ff]'
															: '' || item.name === 'Kick Sauber'
																? 'bg-[#87d68a]'
																: '';

					const classNameB =
						item.name === 'Red Bull Racing'
							? 'hover:border-[#3671c6]'
							: '' || item.name === 'McLaren'
								? 'hover:border-[#ff8000]'
								: '' || item.name === 'Ferrari'
									? 'hover:border-[#e80020]'
									: '' || item.name === 'Mercedes'
										? 'hover:border-[#27f4d2]'
										: '' || item.name === 'Aston Martin'
											? 'hover:border-[#229971]'
											: '' || item.name === 'Haas'
												? 'hover:border-[#b6babd]'
												: '' || item.name === 'RB'
													? 'hover:border-[#6692ff]'
													: '' || item.name === 'Alpine'
														? 'hover:border-[#0093cc]'
														: '' || item.name === 'Williams'
															? 'hover:border-[#64c4ff]'
															: '' || item.name === 'Kick Sauber'
																? 'hover:border-[#87d68a]'
																: '';

					const location =
						item.location === '0'
							? 'right-10'
							: '' || item.location === '1'
								? 'right-12'
								: '' || item.location === '2'
									? 'right-6'
									: '' || item.location === '3'
										? 'right-14'
										: '' || item.location === '4'
											? 'right-16'
											: '';

					return (
						<div id="llave" key={item.key}>
							<section
								className={`relative bottom-20 mt-8 flex h-[23.4rem] w-[36rem] flex-col rounded-xl rounded-ee-none rounded-ss-none border-r-2 border-t-2 pr-4 pt-3 duration-150 hover:h-[24.5rem] hover:pt-[1rem] sm:h-[25.41rem] sm:w-[40rem] sm:hover:bottom-[4.9rem] sm:hover:mt-[0.782rem] sm:hover:h-[26.5rem] ${classNameB}`}
							>
								<div className="flex items-center">
									<div className={`mr-3 h-9 w-1 ${classNameBG}`}></div>
									<p className="w-[90%] tracking-[0.0125rem]">{item.name}</p>
									<img src={item.logo} alt={item.name} className="w-[10%]" />
								</div>

								<div className="flex gap-[10%]">
									<div className="flex w-[45%] items-center justify-between">
										<div className="flex">
											<p class="p" className="tracking-[0.0125rem]">
												{item.driver1}
											</p>
											<p class="p" className="pl-2 tracking-[0.0125rem]">
												{item.driver1A}
											</p>
										</div>
										<img src={item.imgD1} alt={item.driver1} className="h-12 mr-[0.4rem]" />
									</div>
									<div className="flex w-[45%] items-center justify-between">
										<div className="flex">
											<p class="p" className="tracking-[0.0125rem]">
												{item.driver2}
											</p>
											<p class="p" className="pl-2 tracking-[0.0125rem]">
												{item.driver2A}
											</p>
										</div>
										<img src={item.imgD2} alt={item.driver2} className="h-12 mr-[0.4rem]" />
									</div>
								</div>
								<div id="img" className="mt-4 flex justify-center rounded-2xl pl-1 pt-8">
									<img src={item.Car} alt={item.name} className="max-w-[30rem]" />
								</div>
							</section>
						</div>
					);
				})}
			</div>
		</>
	);
}
