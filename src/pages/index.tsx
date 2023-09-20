import Layout from '@/components/Layout';
import InputMenu from '@/components/InputMenu';

export default function Home() {
	return (
		<>
			<Layout>
				<h2 className='text-center mt-4 text-xl font-bold'>
					Ethereum Unit Converter
				</h2>
				<InputMenu />
			</Layout>
		</>
	);
}
