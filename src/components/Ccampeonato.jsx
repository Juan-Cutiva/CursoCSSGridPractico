import { Fragment } from 'react';

import data from '../data/escuderias.json';
import '../css/Ccampeonato.css';

export default function Example() {
	return (
		<>
			<div className="mx-1 mt-20 flex flex-wrap items-center justify-center gap-8 gap-x-11 sm:gap-4 sm:gap-x-12">
				{data.map((item) => {
					const classNameBG = item.name === item.name ? `bg-${item.color}` : '';

					const classNameB = item.name === item.name ? `hover:border-${item.color}` : '';

					const Max = item.name === 'Red Bull Racing' ? 'hidden' : 'flex';
					const Lec = item.name === 'Ferrari' ? 'hidden' : 'flex';
					const Lan = item.name === 'McLaren' ? 'hidden' : 'flex';

					return (
						<div id="llave" key={item.key} className={`${Max} ${Lec} ${Lan} mt-2 text-gray-100`}>
							<section
								className={`relative bottom-[4rem] mt-8 flex h-[4.1rem] w-[90vw] rounded-xl rounded-ee-none rounded-ss-none border-r-2 border-t-2 pr-4 pt-4 duration-150 hover:h-[5.1rem] hover:pt-[2rem] sm:hover:bottom-[3rem] sm:hover:mt-[-0.1rem] ${classNameB}`}
							>
								<div id="parent" className="flex w-full justify-center">
									<div id="div1" className="">
										<div className={`h-9 w-1 ${classNameBG}`}></div>
									</div>
									<div id="div2" className="flex items-center justify-star mb-3 text-2xl font-black tracking-[0.0125rem] text-gray-100">
										{item.position}
									</div>
										<p
											id="div3"
											class="flex h-[100%] flex-wrap items-center text-center justify-center border-b-[1px] text-base tracking-[0.0125rem] mr-8"
										>
											{item.driver1} <span class="pl-1 font-bold">{item.driver1A}</span>
										</p>
										<p
											id="div4"
											class="flex h-[100%] flex-wrap items-center text-center justify-center border-b-[1px] text-base tracking-[0.0125rem]"
										>
											{item.driver2} <span class="pl-1 font-bold">{item.driver2A}</span>
										</p>
									<div
										id="div5"
										className="hidden items-center justify-center text-xl font-black tracking-[0.0125rem] text-gray-100 sm:flex text-center"
									>
										{' '}
										{item.name}
									</div>
									<div
										id="div6"
										className="flex items-center justify-center text-2xl font-black tracking-[0.0125rem] text-gray-100"
									>
										{' '}
										<span className='hidden sm:flex'>PTS-</span> {item.points}
									</div>
									<div id="div7">
										<img
											className="ml-[10%] mt-1 w-auto items-center justify-center rounded border-[1px] sm:mt-[-0.2rem] sm:h-12 hidden xl:flex"
											src={item.Car}
											alt={item.nameC}
										/>
									</div>
								</div>
							</section>
						</div>
					);
				})}
			</div>
		</>
	);
}
