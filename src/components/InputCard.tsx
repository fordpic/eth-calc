import { InputProps } from '@/types';

export default function InputCard({ unit }: InputProps) {
	return (
		<div className='border border-orange-500 flex items-center space-x-14 flex-grow m-2'>
			<h3 className='whitespace-nowrap pl-4 font-semibold'>
				{unit.name} (Factor of {unit.factor})
			</h3>
			<input className='border border-pink-300 flex-1' />
		</div>
	);
}
