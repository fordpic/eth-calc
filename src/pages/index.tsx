import Layout from '@/components/Layout';
import { InputMenu } from '@/components/InputMenu';

export default function Home() {
	return (
		<>
			<Layout>
				<h2 className='text-center mt-4 text-3xl font-bold text-orange-500/90'>
					Ethereum Unit Converter
				</h2>
				<InputMenu />
				<footer className='text-center font-semibold bg-slate-300/50 p-2.5'>
					Made Wit Luv
				</footer>
			</Layout>
		</>
	);
}
