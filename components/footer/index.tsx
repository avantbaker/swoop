import { Flex, Box } from 'rebass/styled-components';
import styled, { useTheme } from 'styled-components';
import { MenuItem } from 'components/common/menu-item';
import Twitter from 'components/common/icons/twitter';
import Instagram from 'components/common/icons/instagram';
import LinkedIn from 'components/common/icons/linkedin';
import { Logo } from 'components/header';
import Text from 'components/common/text';
import { rem } from 'polished';
import Link from 'next/link';
import theme from 'styles/theme';

const getBorderColor = (type) => {
	let backgroundColor = theme.colors.orange;
	switch (type) {
		case 'light':
			backgroundColor = 'none';
			break;
		case 'orange':
			backgroundColor = theme.colors.calcite;
			break;
		default:
			break;
	}
	return backgroundColor;
};

const FooterContainer = styled(Flex)`
	border-top: 2px solid ${({ theme }) => getBorderColor(theme.type)};
`;

export default function Footer({ isLight = false, ...rest }) {
	const { space, colors, type } = useTheme();
	let backgroundColor = 'black';
	switch (type) {
		case 'light':
			backgroundColor = 'white';
			break;
		case 'orange':
			backgroundColor = 'orange';
			break;
		default:
			break;
	}
	return (
		<FooterContainer
			flexDirection="column"
			justifySelf="flex-end"
			bg={backgroundColor}
			boxSizing="none"
			p={[space[4]]}
			pt={[space[5]]}
			type={backgroundColor}
			{...rest}
		>
			<Flex
				flexDirection={['column', 'row']}
				justifyContent={['inherit', 'space-between']}
				mb={[space[5]]}
			>
				<Flex flexDirection="column" pb={[space[5]]}>
					<Box mb={2}>KEEP UP.</Box>
					<Flex alignItems="center">
						<Box mr={4}>
							<Link href="https://twitter.com">
								<Twitter
									fill={backgroundColor === 'orange' ? colors.calcite : colors.orange}
								/>
							</Link>
						</Box>
						<Box mr={4}>
							<Link href="https://instagram.com">
								<Instagram
									fill={backgroundColor === 'orange' ? colors.calcite : colors.orange}
								/>
							</Link>
						</Box>
						<Box>
							<Link href="https://linkedin.com">
								<LinkedIn
									fill={backgroundColor === 'orange' ? colors.calcite : colors.orange}
								/>
							</Link>
						</Box>
					</Flex>
				</Flex>
				<Flex flexDirection={['row-reverse', 'row']} justifyContent="flex-end">
					<Flex flexDirection="column" ml={[5, 0]}>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Loyalty"
							href="/loyalty"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Shop"
							href="/shop"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Support"
							href="/support"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Careers"
							href="/careers"
						/>
					</Flex>
					<Flex flexDirection="column" ml={[0, 5]}>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							title="Brands"
							href="/brand"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							title="App"
							href="/app"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							title="Press"
							href="/press"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							title="FAQ"
							href="/faq"
						/>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				flexDirection={['column', 'row']}
				justifyContent={['inherit', 'space-between']}
			>
				<Logo maxWidth={rem(130)} mb={[space[4], 0]} isDark={type === 'light'} />
				<Flex
					flexDirection={['column-reverse', 'row']}
					alignItems={['inherit', 'center']}
					justifyContent={['inherit', 'center']}
				>
					<Text
						variant="link2"
						mr={[0, 5]}
						color={backgroundColor === 'orange' || colors.calcite}
					>
						Copyright &copy; 2022 - Swoop App
					</Text>
					<Flex alignItems="center" mb={[rem(space.xs)]}>
						<MenuItem
							pb={[1, 0]}
							variant="link2"
							title="Privacy"
							color={backgroundColor === 'orange' || colors.calcite}
							href="/terms"
						></MenuItem>
						<MenuItem
							pb={[1, 0]}
							variant="link2"
							title="Terms"
							color={backgroundColor === 'orange' || colors.calcite}
							href="/terms"
						></MenuItem>
					</Flex>
				</Flex>
			</Flex>
		</FooterContainer>
	);
}
