import { Fragment } from 'react';

import data from '../data/escuderias.json';
import '../css/Escuderia.css';

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

					const location = item.name === 'McLaren' ? 'sm:mr-5 mr-2' : 'sm:ml-5 ml-2';

					return (
						<a id="llave" key={item.key} className="mt-1" href={item.url} target='_blank' rel='noopener noreferrer'>
							<section
								className={`relative bottom-20 mt-8 flex max-h-[auto] min-h-[50%] w-[90vw] flex-col rounded-xl rounded-ee-none rounded-ss-none border-r-2 border-t-2 pr-4 pt-3 text-gray-100 duration-150 hover:h-[50%] hover:pt-[2rem] sm:h-[20rem] sm:w-[40rem] sm:hover:bottom-[3rem] sm:hover:mt-[-3.2rem] sm:hover:h-[21.3rem] lg:h-[50%] lg:w-[30rem] lg:hover:h-[50%] xl:w-[40rem] ${classNameB}`}
							>
								<div className="flex items-center">
									<div className={`mr-3 h-9 w-1 ${classNameBG}`}></div>
									<p className="w-[90%] font-bold tracking-[0.0125rem]">{item.name}</p>
									<img src={item.logo} alt={item.name} className="w-[10%]" />
								</div>

								<hr className="mb-4 mt-3 w-auto text-gray-100 sm:mb-2 sm:mt-0" />

								<div className="flex gap-[10%]">
									<div className="flex w-[45%] items-center justify-between rounded-br-xl border-b-[1px] border-r-[1px]">
										<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
											<p className="tracking-[0.0125rem]">{item.driver1}</p>
											<p className="font-bold tracking-[0.0125rem] sm:pl-2 lg:pl-0 xl:pl-2">
												{item.driver1A}
											</p>
										</div>
										<img
											src={item.imgD1}
											alt={item.driver1}
											className="mr-[0.4rem] hidden h-12 sm:block"
										/>
									</div>
									<div className="flex w-[45%] items-center justify-between rounded-br-xl border-b-[1px] border-r-[1px]">
										<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
											<p className="tracking-[0.0125rem]">{item.driver2}</p>
											<p className="font-bold tracking-[0.0125rem] sm:pl-2 lg:pl-0 xl:pl-2">
												{item.driver2A}
											</p>
										</div>
										<img
											src={item.imgD2}
											alt={item.driver2}
											className="mr-[0.4rem] hidden h-12 sm:block"
										/>
									</div>
								</div>
								<div id="img" className="mt-4 flex justify-center rounded-xl pt-8">
									<img
										src={item.Car}
										alt={item.name}
										className={`ml-2 min-w-[16rem] max-w-[30rem] sm:ml-5 ${location}`}
									/>
								</div>
							</section>
						</a>
					);
				})}
			</div>
		</>
	);
}