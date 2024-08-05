import { Fragment } from 'react';

import data from "./data.json"

export default function Example() {
	return (
		<>
			<div className="mt-6 flex flex-wrap items-center justify-center text-white">
            {data.map((item) => (
					<img src={item.headshot_url} alt={item.full_name} />
				))}
			</div>
		</>
	);
}
