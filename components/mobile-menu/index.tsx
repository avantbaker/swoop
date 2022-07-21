import styled, { useTheme } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import { createContext, useMemo, useState, useContext } from 'react';
import { MenuItem, MenuButton } from 'components/common/menu-item';
import { rem } from 'polished';
import Text from 'components/common/text';

const MobileMenuWrapper = styled(Flex)`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: white;
	z-index: 1000;
`;

const MenuContext = createContext(null);
export const MenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};
	const value = useMemo(
		() => ({ isOpen, setIsOpen, toggleIsOpen }),
		[isOpen, setIsOpen, toggleIsOpen]
	);
	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMobileMenu = () => {
	return useContext(MenuContext);
};
export const MobileMenu = ({ open = false, children, ...rest }) => {
	const { isOpen } = useMobileMenu();
	const { space } = useTheme();
	if (!isOpen) return null;
	return (
		<MobileMenuWrapper flexDirection="column" pt={rem(132)} px={4} pb={4} {...rest}>
			<Flex flexDirection="column" mb={4}>
				<MenuItem variant="linkDisplay" title="App" href="/app" />
				<MenuItem variant="linkDisplay" title="Brand" href="/brand" />
			</Flex>
			<Flex flexDirection="column" mb={4}>
				<MenuItem color="black" variant="link1" title="Contact" href="/contact" />
				<MenuItem color="black" variant="link1" title="Sign In" href="/signin" />
			</Flex>
			<MenuButton
				textAlign={'center'}
				mr={['0 !important']}
				color="orange"
				title="Get a Demo"
				href="/contact"
			/>
			<Flex flex={1} alignItems="flex-end" mb={5}>
				<Flex flexDirection={['row-reverse', 'row']} justifyContent="flex-end">
					<Flex flexDirection="column" ml={[5, 0]}>
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
							color="slate"
							title="Press"
							href="/press"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="slate"
							title="FAQ"
							href="/faq"
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Loyalty"
							href="/loyalty"
						/>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				flexDirection={['column-reverse', 'row']}
				alignItems={['inherit', 'center']}
				justifyContent={['inherit', 'center']}
			>
				<Text variant="link2" mr={[0, 5]}>
					Copyright c 2022 - Swoop App
				</Text>
				<Flex alignItems="center" mb={[rem(space.xs)]}>
					<MenuItem
						pb={[1, 0]}
						variant="link2"
						title="Privacy"
						href="/privacy"
					></MenuItem>
					<MenuItem pb={[1, 0]} variant="link2" title="Terms" href="/terms"></MenuItem>
				</Flex>
			</Flex>
		</MobileMenuWrapper>
	);
};
