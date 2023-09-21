export type Unit = {
	name: string;
	factor: number;
};

export type LayoutProps = {
	children: React.ReactNode;
};

export type InputProps = {
	unit: Unit;
};
