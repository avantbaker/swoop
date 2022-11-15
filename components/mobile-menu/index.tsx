import styled, { useTheme } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import { createContext, useMemo, useState, useContext } from 'react';
import { MenuItem, MenuButton } from 'components/common/menu-item';
import { rem } from 'polished';
import Text from 'components/common/text';
import { useRouter } from 'next/dist/client/router';

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
	const router = useRouter();
	const toggleIsOpen = () => {
		const html = document.getElementsByTagName('html')[0];
		const body = document.getElementsByTagName('body')[0];
		if (!isOpen) {
			html.style.overflow = 'hidden';
			body.style.overflow = 'hidden';
		} else {
			html.style.overflow = 'initial';
			body.style.overflow = 'initial';
		}
		setIsOpen(!isOpen);
	};
	const goToPage = (path, queryParams) => async () => {
		await router.push({ pathname: path, query: { ...queryParams } });
		setIsOpen(false);
	};
	const goHome = async () => {
		await router.push('/');
		setIsOpen(false);
	};
	const value = useMemo(
		() => ({ isOpen, setIsOpen, toggleIsOpen, goToPage, goHome }),
		[isOpen, setIsOpen, toggleIsOpen, goToPage, goHome]
	);
	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMobileMenu = () => {
	return useContext(MenuContext);
};

export const MobileMenu = ({ open = false, children, ...rest }) => {
	const { isOpen, goToPage } = useMobileMenu();
	const { space } = useTheme();
	if (!isOpen) return null;
	return (
		<MobileMenuWrapper flexDirection="column" pt={rem(132)} px={4} pb={4} {...rest}>
			<Flex flexDirection="column" mb={4}>
				<MenuItem variant="linkDisplay" title="App" onClick={goToPage('/app')} />
				<MenuItem variant="linkDisplay" title="Brand" onClick={goToPage('/brand')} />
			</Flex>
			<Flex flexDirection="column" mb={4}>
				<MenuItem
					color="black"
					variant="link1"
					title="Contact"
					onClick={goToPage('/contact')}
				/>
				{/* <MenuItem
					color="black"
					variant="link1"
					title="Sign In"
					onClick={goToPage('/signin')}
				/> */}
			</Flex>
			<MenuButton
				textAlign={'center'}
				mr={['0 !important']}
				color="orange"
				title="Get a Demo"
				onClick={goToPage('/contact', {
					demo: true,
				})}
			/>
			<Flex flex={1} alignItems="flex-end" mb={5}>
				<Flex flexDirection={['row-reverse', 'row']} justifyContent="flex-end">
					<Flex flexDirection="column" ml={[5, 0]}>
						{/* <MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Shop"
							onClick={goToPage('/shop')}
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Support"
							onClick={goToPage('/support')}
						/>
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Careers"
							onClick={goToPage('/careers')}
						/> */}
					</Flex>
					<Flex flexDirection="column" ml={[0, 5]}>
						{/* <MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="slate"
							title="Press"
							onClick={goToPage('/press')}
						/> */}
						<MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="slate"
							title="FAQ"
							onClick={goToPage('/faq')}
						/>
						{/* <MenuItem
							textAlign={['left', 'right']}
							mr={['0 !important']}
							color="darkGray"
							title="Loyalty"
							onClick={goToPage('/loyalty')}
						/> */}
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
						onClick={goToPage('/privacy')}
					></MenuItem>
					<MenuItem
						pb={[1, 0]}
						variant="link2"
						title="Terms"
						onClick={goToPage('/terms')}
					></MenuItem>
				</Flex>
			</Flex>
		</MobileMenuWrapper>
	);
};
