import { LayoutProps } from '@/types';

export default function Layout({ children }: LayoutProps) {
	return (
		<div className='border-2 border-orange-500/90 mx-auto min-h-screen bg-slate-900 text-slate-300'>
			{children}
		</div>
	);
}
