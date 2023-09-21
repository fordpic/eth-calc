import { InputProps } from '@/types';

export default function InputCard({ unit }: InputProps) {
	return (
		<div className='border border-orange-500'>
			<h3>
				{unit.name} (Factor of {unit.factor})
			</h3>
			<input />
		</div>
	);
}
