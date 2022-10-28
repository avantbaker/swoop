import theme from 'styles/theme';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import Link from 'next/link';

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
	onClick?: any;
};
export const MenuItem = ({
	variant,
	color,
	children,
	title,
	href = '#',
	onClick,
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
		<StyledMenuItem {...rest} onClick={onClick}>
			{onClick ? (
				<Text {...textProps}>{title || children}</Text>
			) : (
				<Link href={href} passHref>
					<a>
						<Text {...textProps}>{title || children}</Text>
					</a>
				</Link>
			)}
		</StyledMenuItem>
	);
};

export const MenuButton = styled(MenuItem)`
	border: 2px solid
		${({ theme, color, borderColor }) => borderColor || color || theme.colors.orange};
	border-radius: ${({ theme }) => rem(theme.space.xl)};
	padding: ${({ theme }) => `${rem(theme.space.md)} ${rem(theme.space.lg)}`};
	cursor: pointer;
	& div {
		text-align: center;
	}
	&:hover {
		background-color: ${({ theme }) => theme.colors.orange};
		div {
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;
