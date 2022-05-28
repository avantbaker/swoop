import { Flex, Box } from 'rebass/styled-components';
import HamburgerMenu from 'components/common/hamburger';
import { MenuItem, MenuButton } from 'components/common/menu-item';
import styled, { useTheme } from 'styled-components';
import { rem } from 'polished';
const DesktopMenu = styled(Box)``;
const Top = styled(Flex)``;
const Bottom = styled(Flex)``;
const NavMenuWrapper = styled(Box)``;

const LogoContainer = styled(Box)`
	width: 100%;
	max-width: ${({ maxWidth }) => maxWidth || rem(155)};
	img {
		width: 100%;
	}
`;

export const WhiteLogo = ({ ...rest }) => {
	return (
		<LogoContainer position="relative" {...rest}>
			<img src="/logos/Swoop-Logo-White@3x.svg" />
		</LogoContainer>
	);
};
export const Header = () => {
	const { space } = useTheme();

	return (
		<Flex
			justifyContent="space-between"
			alignItems={['center', 'center', 'flex-start']}
			p={[space[4]]}
		>
			<WhiteLogo />
			<NavMenuWrapper>
				<HamburgerMenu display={['block', 'block', 'none']} />
				<DesktopMenu display={['none', 'none', 'flex']} flexDirection="column">
					<Top alignItems="center" justifyContent="flex-end" pb={[space[3]]}>
						<MenuItem title="App" />
						<MenuItem title="Brand" />
						<MenuButton title="Get a Demo" color="orange" />
					</Top>
					<Bottom justifyContent="flex-end">
						<MenuItem variant="link2" title="Contact" />
						<MenuItem variant="link2" title="Sign In" color="darkGray" />
					</Bottom>
				</DesktopMenu>
			</NavMenuWrapper>
		</Flex>
	);
};
