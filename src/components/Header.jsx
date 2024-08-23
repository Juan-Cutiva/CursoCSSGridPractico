import { Fragment } from 'react';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
	{ name: 'Campeonato 2024', href: '/Campeonato', current: false },
	{ name: 'Escuderías', href: '/Escuderias', current: false },
	{
		name: 'Pilotos',
		href: '/Drivers',
		current: false
	},
	{
		name: 'Repository',
		href: 'https://github.com/Juan-Cutiva/CursoCSSGridPractico',
		current: false,
		target: '_blank'
	}
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-red-500">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
								{/* Mobile menu button*/}
								<DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
									<span className="absolute -inset-0.5" />
									<span className="sr-only tracking-[0.0125rem]">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</DisclosureButton>
							</div>
							<div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
								<a href="/" className="flex flex-shrink-0 items-center">
									<img
										className="h-8 w-full"
										src="https://media.formula1.com/image/upload/f_auto,c_limit,w_195,q_auto/etc/designs/fom-website/images/f1_logo"
										alt="F1 Logo"
									/>
								</a>
								<div className="hidden md:ml-6 md:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												target={item.target}
												rel="noopener noreferrer"
												className={classNames(
													item.current
														? 'bg-verde tracking-[0.0125rem] text-white'
														: 'tracking-[0.0125rem] text-[#13151a] hover:bg-red-700 hover:text-gray-50 flex items-center text-center',
													'rounded-md px-3 py-2 text-sm font-medium tracking-[0.0125rem]'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only tracking-[0.0125rem]">Open user menu</span>
											<img className="size-9 rounded-full" src="/world.svg" alt="Redes Sociales" />
										</MenuButton>
									</div>
									<Transition
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<MenuItem>
												{({ focus }) => (
													<a
														href="https://www.facebook.com/Formula1/?locale=es_LA"
														target="_blank"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'flex items-center justify-between px-4 py-2 text-sm text-gray-700'
														)}
													>
														<p className="tracking-[0.0125rem]">Facebook</p>{' '}
														<img src="/Facebook.svg" alt="Facebook Logo" />
													</a>
												)}
											</MenuItem>
											<MenuItem>
												{({ focus }) => (
													<a
														href="https://www.instagram.com/f1/"
														target="_blank"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'flex items-center justify-between px-4 py-2 text-sm text-gray-700'
														)}
													>
														<p className="tracking-[0.0125rem]">Instagram</p>{' '}
														<img src="/Instagram.svg" alt="Instagram Logo" />
													</a>
												)}
											</MenuItem>
											<MenuItem>
												{({ focus }) => (
													<a
														href="https://www.linkedin.com/company/formula-one-management-ltd"
														target="_blank"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'flex items-center justify-between px-4 py-2 text-sm text-gray-700'
														)}
													>
														<p className="tracking-[0.0125rem]">Linkedin</p>{' '}
														<img src="/Linkedin.svg" alt="Linkedin Logo" />
													</a>
												)}
											</MenuItem>
											<MenuItem>
												{({ focus }) => (
													<a
														href="https://x.com/F1"
														target="_blank"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'flex items-center justify-between px-4 py-2 text-sm text-gray-700'
														)}
													>
														<p className="tracking-[0.0125rem]">X</p>{' '}
														<img src="/X.svg" alt="X Logo" />
													</a>
												)}
											</MenuItem>
											<MenuItem>
												{({ focus }) => (
													<a
														href="https://www.youtube.com/@Formula1"
														target="_blank"
														className={classNames(
															focus ? 'bg-gray-100' : '',
															'flex items-center justify-between px-4 py-2 text-sm text-gray-700'
														)}
													>
														<p className="tracking-[0.0125rem]">Youtube</p>{' '}
														<img src="/Youtube.svg" alt="Youtube Logo" />
													</a>
												)}
											</MenuItem>
										</MenuItems>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<DisclosurePanel className="md:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<DisclosureButton
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? 'bg-verde text-white'
											: 'text-[#13151a] hover:bg-red-700 hover:text-gray-50',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
