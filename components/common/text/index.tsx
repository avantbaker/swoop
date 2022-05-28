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
		fontSize: rem(16),
		fontWeight: 'normal',
		lineHeight: rem(24),
		color: theme.colors.calcite,
	},
	h1: {},
	h2: {},
	h3: {},
	h4: {},
	h5: {},
	h6: {},
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
