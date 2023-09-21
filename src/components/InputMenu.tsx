import InputCard from './InputCard';
import { ethUnits } from '@/utils/units';
import { Unit } from '@/types';

export default function InputMenu() {
	return (
		<div className='border border-green-500 text-center py-44 mx-44 m-8 space-y-24'>
			<div>
				<p>
					Convert between any metric of Ethereum, all with a simple click of a
					button!
				</p>
			</div>

			<div className='border border-pink-500 space-y-4 flex flex-col flex-grow justify-between'>
				{ethUnits?.map((unit: Unit) => (
					<InputCard key={unit.name} unit={unit} />
				))}
			</div>
		</div>
	);
}
