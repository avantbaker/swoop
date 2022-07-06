import { rem } from 'polished';

const theme = {
	logos: {},
	typography: {
		fonts: {
			primary: "'Zen Antique', serif",
			secondary: "'Shippori Antique', sans-serif",
			tertiary: "'JetBrains Mono', monospace",
		},
	},
	colors: {
		orange: '#FF8B00',
		brown: '#D8D8D8',
		white: '#252525',
		black: '#ffffff',
		calcite: '#E7E2DA',
		sage: '#1B1814',
		lightGray: '#989898',
		slate: '#505050',
		darkGray: 'rgba(152, 152, 152, .25)',
	},
	space: [0, 4, 8, 16, 20, 32, 64, 128, 256],
	breakpoints: [rem(768), rem(1024), rem(1440)],
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
