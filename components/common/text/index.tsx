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

export const variants = {
	display: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: [rem(115.07), rem(140)],
		fontWeight: 'normal',
		lineHeight: [rem(100), rem(130)],
		color: theme.colors.calcite,
		textAlign: 'right',
		wordBreak: 'break-word',
		textTransform: 'uppercase',
		opacity: 0.2,
	},
	displayLight: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: [rem(115.07), rem(140)],
		fontWeight: 'normal',
		lineHeight: [rem(100), rem(130)],
		color: theme.colors.sage,
		textAlign: 'right',
		wordBreak: 'break-word',
		textTransform: 'uppercase',
		opacity: 0.2,
	},
	displayVertical: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: [rem(70), rem(105)],
		fontWeight: 'normal',
		lineHeight: [rem(75), rem(113)],
		color: theme.colors.calcite,
		textTransform: 'uppercase',
		opacity: 0.5,
	},
	h1: {
		fontSize: [rem(47.14), rem(61.05)],
		fontWeight: 'normal',
		lineHeight: [rem(47.14), rem(61.05)],
		textTransform: 'uppercase',
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.primary,
	},
	h2: {
		fontSize: [rem(19.3), rem(25)],
		fontWeight: 'normal',
		lineHeight: [rem(20.93), rem(30)],
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.secondary,
	},
	h3: {},
	h4: {
		fontSize: [rem(14), rem(18)],
		lineHeight: [rem(18.9), rem(20.71)],
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.tertiary,
		fontWeight: 100,
	},
	h4Uppercase: {
		fontSize: [rem(14), rem(18)],
		lineHeight: [rem(18.9), rem(20.71)],
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.tertiary,
		fontWeight: 100,
		textTransform: 'uppercase',
	},
	h5: {},
	h6: {},
	linkDisplay: {
		fontSize: rem(40),
		lineHeight: rem(48.15),
		color: theme.colors.slate,
		textTransform: 'uppercase',
		fontFamily: theme.typography.fonts.tertiary,
		fontWeight: 700,
	},
	link1: {
		fontSize: rem(15),
		lineHeight: rem(20),
		letterSpacing: rem(0.38),
		color: theme.colors.calcite,
		textTransform: 'uppercase',
		fontFamily: theme.typography.fonts.tertiary,
		fontWeight: 700,
	},
	link2: {
		fontSize: rem(10),
		lineHeight: rem(13),
		letterSpacing: rem(0.25),
		color: theme.colors.lightGray,
		fontFamily: theme.typography.fonts.tertiary,
		fontWeight: 700,
	},
	link3: {
		fontSize: [rem(14)],
		lineHeight: rem(21.5),
		letterSpacing: rem(1),
		color: theme.colors.orange,
		fontFamily: theme.typography.fonts.tertiary,
		fontWeight: 700,
		textTransform: 'uppercase',
		textDecoration: 'underline',
	},
	p: {},
	body: {
		fontSize: rem(16),
		fontWeight: 'normal',
		lineHeight: rem(24),
		color: theme.colors.lightGray,
		fontFamily: theme.typography.fonts.tertiary,
	},
	bodySecondary: {
		fontSize: rem(14),
		fontWeight: 'normal',
		lineHeight: rem(20),
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.secondary,
	},
	cardLocation: {
		fontSize: [rem(16)],
		fontWeight: 'normal',
		lineHeight: rem(20),
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.tertiary,
		textTransform: 'uppercase',
	},
	cardBody: {
		fontSize: [rem(14)],
		fontWeight: 'normal',
		lineHeight: rem(21),
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.secondary,
	},
	accordionTitle: {
		fontSize: [rem(19), rem(22)],
		fontWeight: 'normal',
		lineHeight: [rem(24), rem(28)],
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.secondary,
	},
	featuredPressTitle: {
		fontSize: [rem(46.84), rem(55)],
		fontWeight: 'bold',
		lineHeight: [rem(46.04), rem(54)],
		letterSpacing: [rem(3.67)],
		color: theme.colors.sage,
		fontFamily: theme.typography.fonts.tertiary,
		textTransform: 'uppercase',
	},
	pressTitle: {
		fontSize: [rem(27.05)],
		fontWeight: 'bold',
		lineHeight: [rem(30.48)],
		letterSpacing: [rem(1.8)],
		color: theme.colors.sage,
		fontFamily: theme.typography.fonts.tertiary,
		textTransform: 'uppercase',
	},
	featuredPressMeta: {
		fontSize: [rem(10.13)],
		fontWeight: 'bold',
		lineHeight: [rem(13.5)],
		letterSpacing: [rem(0.68)],
		color: theme.colors.sage,
		fontFamily: theme.typography.fonts.tertiary,
		textTransform: 'uppercase',
	},
	featuredPressBody: {
		fontSize: [rem(13), rem(15)],
		fontWeight: 'normal',
		lineHeight: [rem(21.61)],
		color: theme.colors.sage,
		fontFamily: theme.typography.fonts.secondary,
	},
	careersTitle: {
		fontSize: [rem(29.82), rem(41.82), rem(61.05)],
		fontWeight: 'bold',
		lineHeight: [rem(29.82), rem(41.82), rem(61.05)],
		textTransform: 'uppercase',
		color: theme.colors.sage,
		fontFamily: theme.typography.fonts.primary,
	},
	careersSubtitle: {
		fontSize: [rem(19.3)],
		fontWeight: 'bold',
		lineHeight: [rem(20.93)],
		color: theme.colors.sage,
		fontFamily: theme.typography.fonts.secondary,
	},
	termsTitle: {
		fontSize: [rem(46)],
		fontWeight: 'bold',
		lineHeight: [rem(46)],
		letterSpacing: [rem(3)],
		color: theme.colors.sage,
		fontFamily: theme.typography.fonts.tertiary,
		textTransform: 'uppercase',
	},
	termsSubtitle: {
		fontSize: [rem(46)],
		fontWeight: 'bold',
		lineHeight: [rem(46)],
		letterSpacing: [rem(3)],
		color: theme.colors.sage,
		fontFamily: theme.typography.fonts.tertiary,
		textTransform: 'uppercase',
	},
	four0fourTitle: {
		fontSize: [rem(79)],
		fontWeight: 'bold',
		lineHeight: [rem(84)],
		letterSpacing: [rem(6)],
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.tertiary,
		textTransform: 'uppercase',
	},
	four0fourSubtitle: {
		fontSize: [rem(47)],
		fontWeight: 'bold',
		lineHeight: [rem(49)],
		letterSpacing: [rem(6)],
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.primary,
	},
	four0fourBody: {
		fontSize: [rem(19)],
		fontWeight: 'bold',
		lineHeight: [rem(25)],
		color: theme.colors.calcite,
		fontFamily: theme.typography.fonts.secondary,
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
