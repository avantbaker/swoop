import React, { useEffect, useRef, useState } from 'react';
import { InstagramSection } from 'components/instagram';
import { NewsletterSection } from 'components/newsletter';
import { TextBanner } from 'components/text-banner';
import { Flex, Box } from 'rebass/styled-components';
import { Section } from 'components/common/container';
import styled from 'styled-components';
import Text, { variants } from 'components/common/text';
import theme from 'styles/theme';
import { rem } from 'polished';
import { space, variant, color, compose, layout } from 'styled-system';
import { MenuButton } from 'components/common/menu-item';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import DownArrow from 'components/common/icons/down-arrow';
import { useMobileMenu } from 'components/mobile-menu';
import { faCentercode } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import { useForm } from '@formspree/react';

// animateScroll.js

const pow = Math.pow;

// The easing function that makes the scroll decelerate over time
function easeOutQuart(x) {
	return 1 - pow(1 - x, 4);
}

export function animateScroll({ targetPosition, initialPosition, duration }) {
	let start;
	let position;
	let animationFrame;

	const requestAnimationFrame = window.requestAnimationFrame;
	const cancelAnimationFrame = window.cancelAnimationFrame;

	// maximum amount of pixels we can scroll
	const maxAvailableScroll =
		document.documentElement.scrollHeight - document.documentElement.clientHeight;

	const amountOfPixelsToScroll = initialPosition - targetPosition;

	function step(timestamp) {
		if (start === undefined) {
			start = timestamp;
		}

		const elapsed = timestamp - start;

		// this just gives us a number between 0 (start) and 1 (end)
		const relativeProgress = elapsed / duration;

		// ease out that number
		const easedProgress = easeOutQuart(relativeProgress);

		// calculate new position for every thick of the requesAnimationFrame
		position = initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

		// set the scrollbar position
		window.scrollTo(0, position);

		// Stop when max scroll is reached
		if (initialPosition !== maxAvailableScroll && window.scrollY === maxAvailableScroll) {
			cancelAnimationFrame(animationFrame);
			return;
		}

		// repeat until the end is reached
		if (elapsed < duration) {
			animationFrame = requestAnimationFrame(step);
		}
	}

	animationFrame = requestAnimationFrame(step);
}

const logError = () =>
	console.error(`Invalid element, are you sure you've provided element id or react ref?`);

const getElementPosition = (element) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 3000 }) => {
	// the position of the scroll bar before the user clicks the button
	const initialPosition = window.scrollY;

	// decide what type of reference that is
	// if neither ref or id is provided  set element to null
	const element = ref ? ref.current : id ? document.getElementById(id) : null;

	if (!element) {
		// log error if the reference passed is invalid
		logError();
		return;
	}

	animateScroll({
		targetPosition: getElementPosition(element),
		initialPosition,
		duration,
	});
};

const DualSection = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);
	row-gap: ${({ theme }) => rem(theme.space[5])};

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		column-gap: ${({ theme }) => rem(theme.space[6])};
	}
`;

const ContactFormWrapper = styled('form')`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, auto);
	row-gap: ${({ theme }) => rem(theme.space[4])};
	position: relative;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(3, auto);
		grid-gap: ${({ theme }) => rem(theme.space[5])};

		.first {
			grid-column: 1 /4;
		}
		.second {
			grid-column: 4 / 7;
		}
		.third {
			grid-column: 1 / 4;
		}
		.fourth {
			grid-column: 4 /7;
		}
		.fifth {
			grid-column: 1 /4;
		}
	}
`;

const ExtendendInput = styled('input')(space);

const FormInput = styled(ExtendendInput)`
	background: transparent;
	border: 2px solid ${({ theme }) => theme.colors.black};
	border-radius: ${({ theme }) => rem(theme.space.xl)};
	box-sizing: border-box;
	width: 100%;
	font-size: ${rem(15)};
	line-height: ${rem(20)};
	letter-spacing: ${rem(0.38)};
	color: ${({ theme }) => theme.colors.orange} !important;
	text-transform: uppercase;
	font-family: ${({ theme }) => theme.typography.fonts.tertiary};
	font-weight: bold !important;

	::placeholder {
		color: black;
		font-weight: bold;
	}
	${variant({ variants })}
	${compose(color, layout)}
`;

const FormInputWrapper = styled(Box)`
	width: 100%;
	position: relative;
`;

const ExtendendMotionDiv = styled(motion.div)(space);

const DropdownContainer = styled(ExtendendMotionDiv)`
	cursor: pointer;
	background: white;
	border: 2px solid ${({ theme }) => theme.colors.black};
	border-radius: ${({ theme }) => rem(theme.space.xl)};
	box-sizing: border-box;
	width: 100%;
	position: relative;
	z-index: 100;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		position: absolute;
	}
`;
const DropdownHeader = styled(ExtendendMotionDiv)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: ${rem(15)};
	line-height: ${rem(20)};
	letter-spacing: ${rem(0.38)};
	color: ${({ theme }) => theme.colors.black};
	text-transform: uppercase;
	font-family: ${({ theme }) => theme.typography.fonts.tertiary};
	font-weight: bold;
`;
const DropdownListContainer = styled(ExtendendMotionDiv)`
	position: relative;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		position: absolute;
	}
`;
const DropdownListItem = styled(ExtendendMotionDiv)`
	cursor: pointer;
	${({ active, theme }) =>
		active &&
		`
		font-weight: bold !important;
		color: ${theme.colors.orange} !important;
	`}
	&:last-of-type {
		padding-bottom: ${({ theme }) => theme.space[4]};
	}
`;

const listContainer = {
	visible: {
		height: 220,
	},
	hidden: {
		height: 'auto',
	},
};

const list = {
	visible: {
		height: 'auto',
		opacity: 1,
		paddingBottom: rem(theme.space[4]),
		transition: {
			duration: 0.4,
		},
	},
	hidden: {
		height: 0,
		opacity: 0,
		paddingBottom: 0,
		transition: {
			duration: 0.2,
		},
	},
};

const item = {
	visible: (custom) => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: custom,
			stiffness: 100,
			type: 'tween',
			delay: custom,
		},
	}),
	hidden: (custom) => ({
		transition: { duration: custom, type: 'tween', delay: custom },
		opacity: 0,
		x: 20,
	}),
};

// const inquiryItems = Array(5).fill({ value: 'value', label: 'Item' });

const inquiryItems = [
	{
		value: 'support',
		label: 'Support',
	},
	{
		value: 'ambassadors',
		label: 'Ambassadors',
	},
	{
		value: 'affiliates',
		label: 'Affiliates',
	},
	{
		value: 'press',
		label: 'Press',
	},
	{
		value: 'careers',
		label: 'Careers',
	},
	{
		value: 'general-inquiries',
		label: 'General Inquiries',
	},
];

let initialState = {
	value: 'inquiry',
	label: 'Inquiry',
};

const DropdownMenu = ({
	selectedOption = initialState,
	setSelectedOption = (option) => {},
	...rest
}) => {
	const controls = useAnimation();
	const itemControls = useAnimation();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = async () => {
		if (isOpen) {
			await itemControls.start('hidden');
			await controls.start('hidden');
		} else {
			await controls.start('visible');
			await itemControls.start('visible');
		}
		setIsOpen(!isOpen);
	};

	return (
		<DropdownContainer initial="hidden" animate={controls} variants={listContainer}>
			<DropdownHeader {...rest} onClick={toggleDropdown}>
				<Text
					variant="h4"
					color={
						selectedOption.value !== 'inquiry' ? theme.colors.orange : theme.colors.black
					}
					fontWeight="bold"
				>
					{selectedOption.label}
				</Text>
				<input type="text" name="inquiry" value={selectedOption.value} hidden />
				<DownArrow />
			</DropdownHeader>
			<DropdownListContainer
				px={4}
				pb={0}
				initial="hidden"
				animate={controls}
				variants={list}
			>
				<AnimatePresence>
					{inquiryItems.map((inquiry, idx) => {
						return (
							<DropdownListItem
								key={`${inquiry.value}-${idx}`}
								exit="hidden"
								initial="hidden"
								variants={item}
								layoutId={`${inquiry.value}-${idx}`}
								custom={(idx + 1) * 0.1}
								animate={itemControls}
								active={inquiry.value === selectedOption.value}
								onClick={() => {
									setSelectedOption(inquiry);
									toggleDropdown();
								}}
							>
								{inquiry.label}
							</DropdownListItem>
						);
					})}
				</AnimatePresence>
			</DropdownListContainer>
		</DropdownContainer>
	);
};

const CareerSection = styled(ExtendendMotionDiv)`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	column-gap: ${rem(16)};
	grid-template-rows: repeat(2, 380px) auto;
	row-gap: ${rem(16)};

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
	.first {
		height: 100%;
		grid-column: 1 / 8;
	}
	.second {
		grid-column: 8 / 13;
	}
	.fourth {
		grid-column: 1 / 5;
		grid-row: 2 / 3;
	}
	.third {
		grid-column: 5 / 13;
	}
	.fifth {
		grid-column: 1 / -1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		grid-template-columns: repeat(16, 1fr);
		column-gap: ${rem(16)};
		grid-template-rows: 380px auto;

		.first {
			height: 100%;
			grid-column: 1 / 4;
			grid-row: 1 / 3;
		}
		.second {
			grid-column: 4 / 7;
			grid-row: 1 / 3;
		}
		.third {
			grid-column: 8 / 14;
			grid-row: 1 / 2;
		}
		.fourth {
			grid-column: 14 / 17;
			grid-row: 1 / 3;
		}
		.fifth {
			grid-column: 8 / 14;
			grid-row: 2 / 3;
			align-self: end;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		.third {
			grid-column: 8 / 13;
			grid-row: 1 / 2;
		}
		.fifth {
			grid-column: 8 / 13;
			grid-row: 2 / 3;
			align-self: end;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
		.fifth {
			grid-column: 8 / 12;
			grid-row: 2 / 3;
			align-self: end;
		}
	}
`;

const LeftCircle = styled('div')`
	position: absolute;
	left: -30%;
	top: -5%;
	height: ${rem(210)};
	width: ${rem(210)};
	border: 0.5px solid ${({ theme }) => theme.colors.sage};
	border-radius: 50%;
`;

const SmallCircle = styled('div')`
	position: absolute;
	left: -15%;
	bottom: -15%;
	height: ${rem(150)};
	width: ${rem(150)};
	border: 0.5px solid ${({ theme }) => theme.colors.sage};
	border-radius: 50%;
	display: none;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: block;
	}
`;

const BigCircle = styled('div')`
	position: absolute;
	left: -50%;
	top: -5%;
	height: ${rem(574)};
	width: ${rem(574)};
	border: 0.5px solid ${({ theme }) => theme.colors.sage};
	border-radius: 50%;
	display: none;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: block;
	}
`;
function Contact() {
	const router = useRouter();
	const [state, handleSubmit] = useForm('maykpnrl');
	if (router.query?.inquiry) {
		inquiryItems.forEach((item) => {
			if (item.value === router.query?.inquiry) {
				initialState = item;
			}
		});
	}

	useEffect(() => {
		if (router.query?.demo) {
			scrollTo({ id: 'demo', duration: 3000 });
		}
	}, []);

	const [selectedOption, setSelectedOption] = useState(initialState);

	const handleClick = () => {
		setSelectedOption({
			value: 'careers',
			label: 'Careers',
		});
		scrollTo({ id: 'contact-form', duration: 3000 });
	};

	const [contactForm, setContactForm] = useState(null);
	return (
		<div style={{ overflowX: 'hidden' }}>
			<TextBanner pt={[7, 8]} isLight title="Contact" />
			<Section id="contact-form">
				<DualSection>
					<Flex flexDirection="column" pr={[, , 7]}>
						<Text
							variant="h1"
							color="sage"
							fontWeight="bold"
							fontFamily={theme.typography.fonts.tertiary}
							mb={[5]}
						>
							general inquiries
						</Text>
						<Text variant="h2" color="sage" mb={[4]}>
							If you’ve got a question, we’ve got an answer.
						</Text>
						<Text
							variant="h4"
							color="sage"
							fontSize={[`${rem(15)} !important`]}
							lineHeight={[rem(20), rem(24)]}
						>
							For general inquiries, support, or to learn more about parntering with Swoop
							for your course, please fill out the form.
						</Text>
					</Flex>
					<Flex alignItems="flex-end">
						<ContactFormWrapper ref={setContactForm} onSubmit={handleSubmit}>
							<FormInputWrapper className="first">
								<FormInput
									type="text"
									variant="h4"
									px={4}
									py={3}
									name="name"
									placeholder="Name"
									maxWidth={['100%']}
									onFocus={(e) => (e.target.placeholder = '')}
									onBlur={(e) => (e.target.placeholder = 'Name')}
								/>
							</FormInputWrapper>
							<FormInputWrapper className="second">
								<FormInput
									type="text"
									variant="h4"
									px={4}
									py={3}
									name="email"
									placeholder="Email"
									maxWidth={['100%']}
									onFocus={(e) => (e.target.placeholder = '')}
									onBlur={(e) => (e.target.placeholder = 'Email')}
								/>
							</FormInputWrapper>
							<FormInputWrapper className="third">
								<FormInput
									type="text"
									variant="h4"
									px={4}
									py={3}
									name="phone"
									placeholder="Phone"
									maxWidth={['100%']}
									onFocus={(e) => (e.target.placeholder = '')}
									onBlur={(e) => (e.target.placeholder = 'Phone')}
								/>
							</FormInputWrapper>
							<Box position="relative" width="100%" className="fourth">
								<FormInputWrapper>
									<DropdownMenu
										variant="h4"
										px={4}
										py={3}
										selectedOption={selectedOption}
										setSelectedOption={setSelectedOption}
										placeholder="Inquiry"
										maxWidth={['100%']}
									/>
								</FormInputWrapper>
							</Box>
							<FormInputWrapper className="fifth">
								<MenuButton
									onClick={() => {
										contactForm.dispatchEvent(
											new Event('submit', { bubbles: true, cancelable: true })
										);
									}}
									borderColor={theme.colors.orange}
									color={theme.colors.orange}
								>
									Submit
								</MenuButton>
							</FormInputWrapper>
						</ContactFormWrapper>
					</Flex>
				</DualSection>
			</Section>
			<Section id="demo" mb={[6, 7]}>
				<DualSection>
					<Flex flexDirection="column" pr={[, , 7]}>
						<Text
							variant="h1"
							color="sage"
							fontWeight="bold"
							fontFamily={theme.typography.fonts.tertiary}
							mb={[5]}
						>
							GET A DEMO
						</Text>
						<Text variant="h2" color="sage" mb={[4]}>
							Schedule a 30-Minute zoom meeting for a Swoop demo.
						</Text>
						<Text
							variant="h4"
							fontSize={[`${rem(15)} !important`]}
							lineHeight={[rem(20), rem(24)]}
							color="sage"
							mb={[6]}
						>
							You’re ready to create avenues for growth and optimization within your
							course.
						</Text>
						<FormInputWrapper className="fifth" maxWidth={['70%']} mb={[6]}>
							<MenuButton
								href="https://calendly.com/swoopgolf/30min?hide_gdpr_banner=1"
								borderColor={theme.colors.orange}
								color={theme.colors.orange}
							>
								Schedule a demo
							</MenuButton>
						</FormInputWrapper>
					</Flex>
					<Flex
						mx={[-20]}
						minHeight={[rem(260), rem(400)]}
						style={{
							background: `url(/swoop/contact/contact-demo.jpeg)`,
							backgroundPosition: '0 -100px',
							backgroundSize: 'cover',
						}}
					></Flex>
				</DualSection>
				<BigCircle />
				<SmallCircle />
			</Section>
			<CareerSection mb={[6, 7]}>
				<Box className="first">
					<img src="/swoop/contact/contact-putt.png" alt="" />
				</Box>
				<Box className="second">
					<img src="/swoop/contact/contact-cart.png" alt="" />
				</Box>
				<Flex className="third" alignItems={['flex-end', 'flex-start']} pl={[5]} pr={2}>
					<Flex flexDirection="column">
						<Text variant="careersTitle" mb={[5, 6]}>
							Swoop Careers
						</Text>
						<Text
							variant="careersSubtitle"
							mb={[4, 5]}
							fontFamily="'Shippori Antique', sans-serif"
						>
							Want to join the Swoop team?
						</Text>
						<Text
							variant="bodySecondary"
							color="sage"
							fontWeight={['100', 'normal']}
							fontSize={[rem(14)]}
							lineHeight={[rem(20), rem(24)]}
							pr={[, 4, 4]}
							fontFamily="'JetBrains Mono', monospace"
						>
							We’re on the lookout for talented, foodie, golf enthusiasts with backgrounds
							in marketing & sales, product development, and social media management. If
							this sounds like you, get in touch
						</Text>
					</Flex>
				</Flex>
				<Box className="fourth">
					<img src="/swoop/contact/contact-place-ball.png" alt="" />
				</Box>
				<Box className="fifth" mt={5} px={[4, 5]}>
					<MenuButton
						borderColor={theme.colors.orange}
						color={theme.colors.orange}
						onClick={handleClick}
					>
						Career Inquiries
					</MenuButton>
				</Box>
			</CareerSection>
			<InstagramSection>
				<LeftCircle />
			</InstagramSection>
			<NewsletterSection />
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			theme: 'light',
		},
	};
}

export default Contact;
