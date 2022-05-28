import { rem } from 'polished';

const theme = {
	logos: {},
	typography: {
		fonts: {
			primary: "'Syne', sans-serif",
			secondary: "'Brygada 1918', serif",
		},
	},
	colors: {
		orange: '#FF8B00',
		black: '#252525',
		calcite: '#ffffff',
		lightGray: '#989898',
		darkGray: 'rgba(152, 152, 152, .25)',
	},
	space: [0, 4, 8, 16, 20, 32, 64, 128, 256],
	breakpoints: ['40em', '52em', '64em'],
};

theme['space' as any].xs = theme.space[1];
theme['space' as any].sm = theme.space[2];
theme['space' as any].md = theme.space[3];
theme['space' as any].lg = theme.space[4];
theme['space' as any].xl = theme.space[5];
theme['space' as any].xxl = theme.space[6];
theme['space' as any].xxxl = theme.space[7];
theme['space' as any].xxxxl = theme.space[8];

export default theme;
