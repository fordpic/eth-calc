export const ETH_UNITS = [
	{
		name: 'Wei',
		factor: 0,
	},
	{
		name: 'Kwei',
		factor: 3,
	},
	{
		name: 'Mwei',
		factor: 6,
	},
	{
		name: 'Gwei',
		factor: 9,
	},
	{
		name: 'Szabo',
		factor: 12,
	},
	{
		name: 'Finney',
		factor: 15,
	},
	{
		name: 'Ether',
		factor: 18,
	},
	{
		name: 'Kether',
		factor: 21,
	},
	{
		name: 'Mether',
		factor: 24,
	},
	{
		name: 'Gether',
		factor: 27,
	},
	{
		name: 'Tether',
		factor: 30,
	},
];

export const UNIT_MAP: { [key: string]: number } = {
	wei: 1,
	kwei: 1e3,
	mwei: 1e6,
	gwei: 1e9,
	szabo: 1e12,
	finney: 1e15,
	ether: 1e18,
	kether: 1e21,
	mether: 1e24,
	gether: 1e27,
	tether: 1e30,
};
