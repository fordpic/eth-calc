import InputCard from './InputCard';
import { ETH_UNITS, UNIT_MAP } from '@/utils/units';
import { Unit } from '@/types';

export function convertUnits(modifiedUnit: string): void {
	const modifiedInput = (
		document.getElementById(modifiedUnit) as HTMLInputElement
	).valueAsNumber;

	const inWei = modifiedInput * UNIT_MAP[modifiedUnit];

	for (const unit in UNIT_MAP) {
		// avoid overwrite
		if (unit !== modifiedUnit) {
			const convertedUnit = inWei / UNIT_MAP[unit];
			(document.getElementById(unit) as HTMLInputElement).value =
				convertedUnit.toString();
		}
	}
}

export function InputMenu() {
	return (
		<div className='border border-green-500 text-center mx-44 m-8 space-y-12'>
			<div className='space-y-8 font-bold'>
				<p>
					Convert between any metric of Ethereum, all with a simple click of a
					button!
				</p>

				<p>
					Choose between any of the available units below - simply type the
					amount in any input below to get the amount displayed in every unit
					possible!
				</p>
			</div>

			<div className='border border-pink-500 space-y-4 flex flex-col flex-grow justify-between'>
				{ETH_UNITS?.map((unit: Unit) => (
					<InputCard key={unit.name} id={unit.name.toLowerCase()} unit={unit} />
				))}
			</div>
		</div>
	);
}
