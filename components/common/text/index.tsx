import styled from 'styled-components';
import { rem } from 'polished';
import theme from 'styles/theme';

import {
	color,
	compose,
	typography,
	space,
	layout,
	variant,
	SpaceProps,
	LayoutProps,
	TypographyProps,
	ColorProps,
} from 'styled-system';

const variants = {
	display: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(115.07),
		fontWeight: 'normal',
		lineHeight: rem(100),
		color: theme.colors.calcite,
		textAlign: 'right',
		wordBreak: 'break-word',
		textTransform: 'uppercase',
		opacity: 0.2,
	},
	h1: {
		fontSize: [rem(47.14), rem(61.05)],
		fontWeight: 'normal',
		lineHeight: [rem(47.14), rem(61.05)],
		textTransform: 'uppercase',
		color: theme.colors.calcite,
	},
	h2: {
		fontSize: [rem(19.3), rem(25)],
		fontWeight: 'normal',
		lineHeight: [rem(20.93), rem(28)],
		color: theme.colors.calcite,
	},
	h3: {},
	h4: {
		fontSize: [rem(14), rem(18)],
		fontWeight: 'normal',
		lineHeight: [rem(18.9), rem(20.71)],
		color: theme.colors.calcite,
	},
	h5: {},
	h6: {},
	linkDisplay: {
		fontSize: rem(40),
		fontWeight: 'normal',
		lineHeight: rem(48.15),
		color: theme.colors.slate,
		textTransform: 'uppercase',
	},
	link1: {
		fontSize: rem(15),
		fontWeight: 'normal',
		lineHeight: rem(20),
		letterSpacing: rem(0.38),
		color: theme.colors.calcite,
		textTransform: 'uppercase',
	},
	link2: {
		fontSize: rem(10),
		fontWeight: 'normal',
		lineHeight: rem(13),
		letterSpacing: rem(0.25),
		color: theme.colors.lightGray,
	},
	p: {},
	body: {
		fontSize: rem(16),
		fontWeight: 'normal',
		lineHeight: rem(24),
		color: theme.colors.lightGray,
	},
};

type TextProps = SpaceProps &
	LayoutProps &
	TypographyProps &
	ColorProps & {
		variant: keyof typeof variants;
		children: React.ReactNode;
	};

const Text = styled.div<TextProps>`
	margin: 0;
	padding: 0;

	${variant({ variants })}
	${compose(space, layout, color, typography)}
`;

Text.defaultProps = {
	variant: 'body',
};

export default Text;
