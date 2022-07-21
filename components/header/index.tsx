import { Flex, Box } from 'rebass/styled-components';
import HamburgerMenu from 'components/common/hamburger';
import { MenuItem, MenuButton } from 'components/common/menu-item';
import styled, { useTheme } from 'styled-components';
import { rem } from 'polished';
const DesktopMenu = styled(Box)``;
const Top = styled(Flex)``;
const Bottom = styled(Flex)``;
const NavMenuWrapper = styled(Box)``;
import { useMobileMenu } from 'components/mobile-menu';
import Link from 'next/link';

const LogoContainer = styled(Box)`
	width: 100%;
	img {
		width: 100%;
	}
`;

const HeaderWrapper = styled(Flex)`
	position: absolute;
	z-index: 10000;
	left: 0;
	right: 0;
`;

export const Logo = ({ isDark = false, ...rest }) => {
	const logoType = isDark ? 'Black' : 'White';
	return (
		<LogoContainer position="relative" {...rest}>
			<Link href="/">
				<img src={`/logos/Swoop-Logo-${logoType}@3x.svg`} />
			</Link>
		</LogoContainer>
	);
};
export const Header = ({ ...rest }) => {
	const { colors, space, type } = useTheme();
	const { isOpen, toggleIsOpen } = useMobileMenu();
	return (
		<HeaderWrapper
			justifyContent="space-between"
			alignItems={['flex-start']}
			p={[space[4]]}
			pt={[space[5]]}
			{...rest}
		>
			<Logo maxWidth={[rem(130), rem(150)]} isDark={type === 'light' ? true : isOpen} />
			<NavMenuWrapper>
				<HamburgerMenu
					isOpen={isOpen}
					toggleMobileNav={() => toggleIsOpen()}
					display={['block', 'block', 'none']}
				/>
				<DesktopMenu display={['none', 'none', 'flex']} flexDirection="column">
					<Top alignItems="center" justifyContent="flex-end" pb={[space[3]]}>
						<MenuItem title="App" href="/app" />
						<MenuItem title="Brand" href="/brand" />
						<MenuButton
							title="Get a Demo"
							color={type === 'orange' ? colors.calcite : 'orange'}
							href="/contact"
						/>
					</Top>
					<Bottom justifyContent="flex-end">
						<MenuItem
							variant="link2"
							title="Contact"
							color={type === 'orange' && colors.calcite}
							href="/contact"
						/>
						<MenuItem
							variant="link2"
							title="Sign In"
							color={type === 'orange' ? colors.calcite : 'darkGray'}
							href="/#"
						/>
					</Bottom>
				</DesktopMenu>
			</NavMenuWrapper>
		</HeaderWrapper>
	);
};
