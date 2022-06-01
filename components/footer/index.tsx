import { Flex, Box } from 'rebass/styled-components';
import styled, { useTheme } from 'styled-components';
import { MenuItem } from 'components/common/menu-item';
import Twitter from 'components/common/icons/twitter';
import Instagram from 'components/common/icons/instagram';
import LinkedIn from 'components/common/icons/linkedin';
import { WhiteLogo } from 'components/header';
import Text from 'components/common/text';
import { rem } from 'polished';

const FooterContainer = styled(Flex)`
	border-top: 2px solid ${({ theme }) => theme.colors.orange};
`;

export default function Footer({ ...rest }) {
	const { space, colors } = useTheme();
	return (
		<FooterContainer
			flexDirection="column"
			justifySelf="flex-end"
			bg="black"
			boxSizing="none"
			p={[space[4]]}
			pt={[space[5]]}
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
							<Twitter fill={colors.orange} />
						</Box>
						<Box mr={4}>
							<Instagram fill={colors.orange} />
						</Box>
						<Box>
							<LinkedIn fill={colors.orange} />
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
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Shop"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Support"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Careers"
						/>
					</Flex>
					<Flex flexDirection="column" ml={[0, 5]}>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							title="Brands"
						/>
						<MenuItem textAlign={['left', 'right']} mr={['0 !important']} title="App" />
						<MenuItem textAlign={['left', 'right']} mr={['0 !important']} title="Press" />
						<MenuItem textAlign={['left', 'right']} mr={['0 !important']} title="FAQ" />
					</Flex>
				</Flex>
			</Flex>
			<Flex
				flexDirection={['column', 'row']}
				justifyContent={['inherit', 'space-between']}
			>
				<WhiteLogo maxWidth={rem(130)} mb={[space[4], 0]} />
				<Flex
					flexDirection={['column-reverse', 'row']}
					alignItems={['inherit', 'center']}
					justifyContent={['inherit', 'center']}
				>
					<Text variant="link2" mr={[0, 5]}>
						Copyright &copy; 2022 - Swoop App
					</Text>
					<Flex alignItems="center" mb={[rem(space.xs)]}>
						<MenuItem pb={[1, 0]} variant="link2" title="Privacy"></MenuItem>
						<MenuItem pb={[1, 0]} variant="link2" title="Terms"></MenuItem>
					</Flex>
				</Flex>
			</Flex>
		</FooterContainer>
	);
}
