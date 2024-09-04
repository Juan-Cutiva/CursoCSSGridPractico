import { Fragment } from 'react';

import data from '../data/data.json';

export default function Example() {
	return (
		<>
			<div className="mx-1 mt-20 flex flex-wrap items-center justify-center gap-8 gap-x-11 sm:gap-4 sm:gap-x-12">
				{data.map((item) => {
					const classNameBG = item.name === item.name ? `bg-${item.color}` : '';

					const classNameB = item.name === item.name ? `hover:border-${item.color}` : '';

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
						<a id="llave" key={item.key} href={item.url} target="_blank" rel="noopener noreferrer">
							<section
								className={`relative bottom-20 mt-8 flex h-[24.4rem] w-[22rem] flex-col rounded-xl rounded-ee-none rounded-ss-none border-r-2 border-t-2 pr-4 pt-4 duration-150 hover:h-[25.5rem] hover:pt-[2rem] sm:h-[26.41rem] sm:w-[26rem] sm:hover:bottom-[3.9rem] sm:hover:mt-[-1.1rem] sm:hover:h-[27.5rem] ${classNameB}`}
							>
								<div className="flex justify-between">
									<div className="flex">
										<div className={`h-9 w-1 ${classNameBG}`}></div>
										<div className="relative bottom-1 mb-6 ml-3 h-9">
											<p className="tracking-[0.0125rem] text-gray-100">{item.first_name}</p>
											<p className="font-black tracking-[0.0125rem] text-gray-100">
												{item.last_name}
											</p>
										</div>
									</div>
									<img className="h-9 rounded border-[1px]" src={item.country} alt={item.nameC} />
								</div>
								<hr className="w-auto text-gray-100" />
								<div>
									<p className="tracking-[0.0125rem] text-gray-100">{item.team_name}</p>
									<div className="flex items-end">
										<img
											className="relative right-2 top-1 h-14 sm:h-20"
											src={item.driver_number_img}
											alt={item.driver_number}
										/>
										<img
											className={`relative ${location} h-72 sm:h-80`}
											src={item.headshot_url}
											alt={item.full_name}
										/>
									</div>
								</div>
							</section>
						</a>
					);
				})}
			</div>
		</>
	);
}
