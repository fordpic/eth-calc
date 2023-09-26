import BigNumber from 'bignumber.js';
import InputCard from './InputCard';
import { ETH_UNITS, UNIT_MAP } from '@/utils/units';
import { Unit } from '@/types';

BigNumber.config({ DECIMAL_PLACES: 30 });

export function convertUnits(modifiedUnit: string): void {
	const modifiedInputValue = (
		document.getElementById(modifiedUnit) as HTMLInputElement
	).value;

	// clear inputs if current input is cleared
	if (modifiedInputValue === '') {
		for (const unit in UNIT_MAP) {
			(document.getElementById(unit) as HTMLInputElement).value = '';
		}
		return;
	}

	const modifiedInput = new BigNumber(modifiedInputValue);
	const inWei = modifiedInput.multipliedBy(UNIT_MAP[modifiedUnit]);

	for (const unit in UNIT_MAP) {
		// make sure no overwrite
		if (unit !== modifiedUnit) {
			const conversionFactor = new BigNumber(UNIT_MAP[unit]);
			const convertedUnit = inWei.dividedBy(conversionFactor);
			(document.getElementById(unit) as HTMLInputElement).value =
				convertedUnit.toFixed();
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
