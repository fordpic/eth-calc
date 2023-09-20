type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div className='border-2 border-red-500 mx-auto min-h-screen'>
			{children}
		</div>
	);
}
