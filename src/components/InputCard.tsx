import { InputProps } from '@/types';
import { convertUnits } from './InputMenu';

export default function InputCard({ unit, id }: InputProps) {
	return (
		<div className='border border-orange-500 bg-orange-500/90 rounded-xl flex items-center space-x-14 flex-grow m-2.5'>
			<h3 className='whitespace-nowrap pl-4 p-5 font-semibold w-64'>
				{unit.name} (Factor of {unit.factor})
			</h3>
			<input
				id={id}
				className='border border-pink-300 flex-1'
				type='number'
				onInput={() => convertUnits(id)}
			/>
		</div>
	);
}
