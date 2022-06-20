import theme from 'styles/theme';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';

const StyledMenuItem = styled(Box)`
	padding-top: ${({ theme }) => rem(theme.space[1])};
	padding-bottom: ${({ theme, pb }) => pb || rem(theme.space[1])};
	&:not(:last-of-type) {
		margin-right: ${({ theme }) => rem(theme.space[5])};
	}
`;

type MenuItem = {
	variant?: string;
	color?: string;
	children?: string;
	title?: string;
	href?: string;
	pb?: any;
	textAlign?: any;
	mr?: any;
};
export const MenuItem = ({
	variant,
	color,
	children,
	title,
	href = '#',
	...rest
}: MenuItem) => {
	let textProps = {
		color: color || theme.colors.calcite,
		variant: 'link1',
		textAlign: rest.textAlign || 'left',
		mr: rest.mr,
	};

	if (variant) {
		!color && delete textProps.color;
		textProps.variant = variant;
	}

	return (
		<StyledMenuItem {...rest}>
			<a href={href}>
				<Text {...textProps}>{title || children}</Text>
			</a>
		</StyledMenuItem>
	);
};

export const MenuButton = styled(MenuItem)`
	border: 2px solid ${({ theme, color }) => color || theme.colors.orange};
	border-radius: ${({ theme }) => rem(theme.space.xl)};
	padding: ${({ theme }) => `${rem(theme.space.md)} ${rem(theme.space.lg)}`};
	& div {
		text-align: center;
	}
`;
