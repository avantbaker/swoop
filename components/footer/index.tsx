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
			// backgroundColor = 'none';
			break;
		case 'orange':
			backgroundColor = theme.colors.white;
			break;
		default:
			break;
	}
	return backgroundColor;
};

const FooterContainer = styled(Flex)`
	border-top: 2px solid ${({ theme }) => getBorderColor(theme.type)};
`;

const FooterMenuItem = styled(MenuItem)`
	&:hover {
		div {
			color: ${({ theme }) => theme.colors.orange};
		}
	}
`;

export default function Footer({ isLight = false, ...rest }) {
	const { space, colors, type, typography } = useTheme();
	let backgroundColor = 'black';
	let textColor = 'white';

	switch (type) {
		case 'light':
			backgroundColor = 'white';
			textColor = 'black';
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
			bg={backgroundColor === 'black' ? colors.sage : backgroundColor}
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
					<Box mb={3}>
						<Text color={textColor} fontSize={[rem(20)]}>
							KEEP UP.
						</Text>
					</Box>
					<Flex alignItems="center">
						{/* <Box mr={4}>
							<a href="https://twitter.com/swoopgolf">
								<Twitter
									fill={backgroundColor === 'orange' ? colors.white : colors.orange}
								/>
							</a>
						</Box> */}
						<Box mr={4}>
							<a href="https://www.instagram.com/swoopgolf/">
								<Instagram
									fill={backgroundColor === 'orange' ? colors.white : colors.orange}
								/>
							</a>
						</Box>
						<Box>
							<a href="https://www.linkedin.com/company/swoopgolf/">
								<LinkedIn
									fill={backgroundColor === 'orange' ? colors.white : colors.orange}
								/>
							</a>
						</Box>
					</Flex>
				</Flex>
				<Flex flexDirection={['row-reverse', 'row']} justifyContent="flex-end">
					<Flex flexDirection="column" ml={[5, 0]}>
						{/* <MenuItem
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
						/> */}
					</Flex>
					<Flex flexDirection="column" ml={[0, 5]}>
						<FooterMenuItem
							textAlign={['left', 'right']}
							color={textColor}
							mr={['0 !important']}
							title="Brand"
							href="/brand"
						/>
						<FooterMenuItem
							textAlign={['left', 'right']}
							color={textColor}
							mr={['0 !important']}
							title="App"
							href="/app"
						/>
						{/* <MenuItem
							textAlign={['left', 'right']}
							color={textColor}
							mr={['0 !important']}
							title="Press"
							href="/press"
						/> */}
						<FooterMenuItem
							textAlign={['left', 'right']}
							color={textColor}
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
					<Text variant="link2" mr={[0, 5]} color={textColor}>
						Copyright &copy; 2022 - Swoop App
					</Text>
					<Flex alignItems="center" mb={[rem(space.xs)]}>
						<FooterMenuItem
							pb={[1, 0]}
							variant="link2"
							title="Privacy"
							color={textColor}
							href="/privacy"
						></FooterMenuItem>
						<FooterMenuItem
							pb={[1, 0]}
							variant="link2"
							title="Terms"
							color={textColor}
							href="/terms"
						></FooterMenuItem>
					</Flex>
				</Flex>
			</Flex>
		</FooterContainer>
	);
}
