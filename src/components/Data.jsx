import { Fragment, useEffect } from 'react';


	// fetch('https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158')
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));

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
