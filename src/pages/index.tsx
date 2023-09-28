import { GitHub, Linkedin } from 'react-feather';
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
				<footer className='text-center font-semibold bg-slate-300/50 border border-orange-500/90 p-2.5 flex justify-center space-x-3'>
					<a
						href='https://github.com/fordpic'
						target='_blank'
						className='hover:text-orange-500/90'>
						<GitHub size={20} />
					</a>
					<a
						href='https://www.linkedin.com/in/fordpickert/'
						target='_blank'
						className='hover:text-orange-500/90'>
						<Linkedin size={20} />
					</a>
				</footer>
			</Layout>
		</>
	);
}
