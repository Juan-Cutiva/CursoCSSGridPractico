import { Fragment } from 'react';

import data from './data.json';

export default function Example() {
	return (
		<>
			<div className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-4 sm:gap-x-12 gap-x-11 mx-1">
				{data.map((item) => (
					<div>
					<section className="flex h-[26.41rem] hover:h-[27.5rem] duration-150 w-[26rem] flex-col mt-8 relative bottom-20 hover:bottom-[3.9rem] hover:mt-[-1.1rem]  hover:pt-[2rem] border-r-2 border-t-2 rounded-xl rounded-ss-none rounded-ee-none pr-4 pt-4 hover:border-gray-400">
						<div className="flex justify-between">
							<div className='flex'>
								<div className={`bg-white h-9 w-1`}></div>
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
							<div className='flex items-end'>
								<img className='h-20 relative top-2 right-2' src={item.driver_number_img} alt={item.driver_number} />
								<img className='h-80 relative right-10' src={item.headshot_url} alt={item.full_name} />
							</div>
						</div>
					</section>
					</div>
				))}
			</div>
		</>
	);
}
