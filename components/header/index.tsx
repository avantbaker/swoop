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
import theme from 'styles/theme';

const LogoContainer = styled(Box)`
	width: 100%;
	img {
		width: 100%;
	}
`;

const HeaderWrapper = styled(Flex)`
	position: absolute;
	z-index: 100000000000000;
	left: 0;
	right: 0;
	${({ isDark }) =>
		isDark &&
		`
	background: rgb(0, 0, 0);
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.7) 0%,
		rgba(0, 0, 0, 0.4) 33%,
		rgba(0, 0, 0, 0) 100%
	);
	`}
`;

export const Logo = ({ isDark = false, ...rest }) => {
	const logoType = isDark ? 'Black' : 'White';
	const { goHome } = useMobileMenu();
	return (
		<LogoContainer position="relative" {...rest}>
			<a onClick={goHome}>
				<img src={`/logos/Swoop-Logo-${logoType}@3x.svg`} />
			</a>
		</LogoContainer>
	);
};

const HeaderMenuItem = styled(MenuItem)`
	&:hover {
		div {
			color: ${({ theme }) => theme.colors.orange};
		}
	}
`;
const HeaderMenuButton = styled(MenuButton)`
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.orange};
		div {
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;
export const Header = ({ ...rest }) => {
	const { colors, space, type } = useTheme();
	const { isOpen, toggleIsOpen } = useMobileMenu();
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
		<HeaderWrapper
			justifyContent="space-between"
			alignItems={['flex-start']}
			p={[space[4]]}
			pt={[space[5]]}
			isDark={backgroundColor === 'black' && !isOpen}
			{...rest}
		>
			<Logo maxWidth={[rem(130), rem(150)]} isDark={type === 'light' ? true : isOpen} />
			<NavMenuWrapper>
				<HamburgerMenu
					isOpen={isOpen}
					toggleMobileNav={() => toggleIsOpen()}
					display={['block', 'block', 'none']}
					isDark={type === 'light' ? true : isOpen}
				/>
				<DesktopMenu display={['none', 'none', 'flex']} flexDirection="column">
					<Top alignItems="center" justifyContent="flex-end" pb={[space[3]]}>
						<HeaderMenuItem title="App" color={textColor} href="/app" />
						<HeaderMenuItem title="Brand" color={textColor} href="/brand" />
						<HeaderMenuButton
							title="Get a Demo"
							color={type === 'orange' ? colors.white : colors.orange}
							href="/contact?demo=true"
						/>
					</Top>
					<Bottom justifyContent="flex-end">
						<MenuItem
							mr={2}
							variant="link2"
							title="Contact"
							color={type === 'orange' && colors.white}
							href="/contact"
						/>
						{/* <MenuItem
							mr={3}
							variant="link2"
							title="Sign In"
							color={type === 'orange' ? colors.white : 'darkGray'}
							href="/#"
						/> */}
					</Bottom>
				</DesktopMenu>
			</NavMenuWrapper>
		</HeaderWrapper>
	);
};
