type Unit = {
	name: string;
	factor: number;
};

export default function InputCard({ unit }: Unit) {
	return (
		<div className='border border-orange-500'>
			<h3>
				{unit.name} (Factor of {unit.factor})
			</h3>
			<input />
		</div>
	);
}
