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
		<div className='text-center mx-44 m-8 space-y-10'>
			<div className='space-y-6 font-bold'>
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

			<div className='border border-slate-500 border-dashed rounded-lg flex flex-col justify-between m-8 p-2'>
				{ETH_UNITS?.map((unit: Unit) => (
					<InputCard key={unit.name} id={unit.name.toLowerCase()} unit={unit} />
				))}
			</div>
		</div>
	);
}
