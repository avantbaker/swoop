import { DualPathSection, DualSection } from 'components/app-cards';
import { Section } from 'components/common/container';
import Text from 'components/common/text';
import { motion } from 'framer-motion';
import { rem } from 'polished';
import { useRef } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import Image from 'next/image';
import { SwoopImage } from 'components/image';
import Sandwhiches from 'components/common/icons/badges/sandwiches';

export const FloatingAppContainer = styled(DualPathSection)`
	background: ${({ theme }) => theme.colors.sage};
	border-top: none !important;
	position: relative;
	.mobile-section--desktop {
		display: none;
	}
	.fixed {
		max-height: ${rem(340)};
		z-index: 10;

		@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			max-height: ${rem(540)};
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		.mobile-section--desktop {
			display: flex;
			grid-column: 5 / 7;
			align-self: center;
		}
		.mobile-section {
			display: none !important;
		}
	}
`;
export const MainFloatingHero = styled(DualPathSection)`
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
	}
`;
export const CustomSection = styled(Section)`
	background: ${({ theme }) => theme.colors.sage};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		border-left: 2px solid ${({ theme }) => theme.colors.orange};
		border-right: 2px solid ${({ theme }) => theme.colors.orange};
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		width: 100%;
		justify-items: center;
		.section-details {
			grid-column: 4 / 9;
		}
		.mobile-section--desktop {
			grid-column: 9 / 12;
			align-self: center;
		}
		.mobile-section {
			display: none !important;
		}
	}
`;
export const SectionDetails = styled(DualSection)`
	position: relative;
	&:hover {
		background: none;
	}
	img {
		// transform: translateY(${rem(20)});
		// max-height: ${rem(340)};
		@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			max-height: unset;
		}
	}
	// .hidden {
	// 	visibility: hidden;
	// }
	// .fixed {
	// 	position: fixed;
	// 	z-index: 10;
	// }
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		border-left: none;
	}
`;
export const MobileSection = styled(Section)`
	position: relative;
	text-align: right;
`;
export const ValueSectionContainer = styled(Section)`
	min-height: 100vh;
`;
export const ContentContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: auto 1fr;
	column-gap: 20px;
	z-index: 10000000000000;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		grid-template-rows: 1fr;
	}
`;

const TextContent = styled(Box)`
	grid-column: 1 / 10;
	grid-row: 1 / 2;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-row: 1 / 2;
		grid-column: 9 / 13;
		align-self: center;
	}
`;
const ImgContent = styled(Flex)`
	grid-column: 1 / 13;
	grid-row: 2 / 3;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-row: 1 / 2;
		grid-column: 1 / 9;
	}
`;
export const MainImage = styled(motion.img)`
	max-width: 300px;
`;
export const ValueImageContainer = styled(motion.div)`
	position: relative;

	.hidden {
		visibility: hidden;
	}
`;
const NewSpiritIcon = styled(motion.img)`
	position: absolute;
	top: ${rem(-10)};
	left: ${rem(-20)};
	max-width: ${rem(130)};
	z-index: 5;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		top: ${rem(0)};
		left: ${rem(-140)};
		max-width: ${rem(230)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		right: ${rem(60)};
		top: ${rem(-100)};
		max-width: ${rem(180)};
	}
`;
const NewWrapIcon = styled(motion.img)`
	position: absolute;
	top: ${rem(160)};
	right: ${rem(-45)};
	max-width: ${rem(130)};
	z-index: 1;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		right: ${rem(-160)};
		top: ${rem(260)};
		max-width: ${rem(220)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		right: ${rem(80)};
		top: ${rem(140)};
		max-width: ${rem(180)};
	}
`;
const FairwayPicture = styled(motion.img)`
	position: absolute;
	bottom: ${rem(-40)};
	left: ${rem(-20)};
	max-height: ${rem(270)};
	z-index: 0;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		max-height: ${rem(420)};
		left: ${rem(-120)};
		bottom: ${rem(-310)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		max-height: ${rem(380)};
		left: ${rem(-190)};
		bottom: ${rem(-30)};
	}
`;

export const ValueSectionWrapper = styled('div')`
	position: relative;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		height: 100vh;
	}
`;

export const ValueSection = ({
	anchorRef = null,
	containerRef = null,
	onEnter = () => {},
	topOffset = '0',
	children = null,
	title = '',
	body = '',
	...rest
}) => {
	const DEFAULT_REF = useRef(null);
	const DEFAULT_CONTAINER_REF = useRef(null);
	return (
		<ValueSectionWrapper>
			<ValueSectionContainer
				{...rest}
				ref={containerRef || DEFAULT_CONTAINER_REF}
				position="relative"
				flexDirection="column"
				mt={[]}
			>
				<ContentContainer
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false }}
					transition={{ duration: 1.5 }}
					variants={{
						visible: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
				>
					<Waypoint onEnter={onEnter} bottomOffset={topOffset}>
						<TextContent flex={[1, 1]} mb={7}>
							<Text variant="h1" mb={6} maxWidth={rem(400)}>
								{title}
							</Text>
							<Text
								variant="h2"
								fontFamily="'Shippori Antique Regular',sans-serif"
								maxWidth={rem(400)}
								fontWeight="lighter"
							>
								{body}
							</Text>
						</TextContent>
					</Waypoint>
					<ImgContent flex={[1, 'auto']} justifyContent="center">
						<ValueImageContainer>
							<MainImage
								className="hidden"
								ref={anchorRef || DEFAULT_REF}
								src="/elements/hello-john.png"
								alt=""
							/>
							<NewSpiritIcon
								src="/elements/spirits.png"
								alt="golfer holding whiskey drink"
							/>
							<NewWrapIcon
								src="/elements/wraps-icon.png"
								alt="golfer holding whiskey drink"
							/>
							<FairwayPicture
								src="/elements/fairway.png"
								alt="golfer holding whiskey drink"
							/>
						</ValueImageContainer>
					</ImgContent>
				</ContentContainer>
			</ValueSectionContainer>
			{children}
		</ValueSectionWrapper>
	);
};

const ElevateSmallImg = styled(motion.div)`
	position: absolute;
	right: ${rem(-20)};
	top: ${rem(-20)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		right: ${rem(-180)};
		top: ${rem(0)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		left: ${rem(-260)};
		top: ${rem(-120)};
	}
`;

const ElevateBigImg = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: ${rem(-20)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		bottom: ${rem(-410)};
		left: ${rem(-160)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		bottom: ${rem(-60)};
		left: ${rem(-120)};
	}
`;
const Golfball = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: ${rem(-20)};
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		top: ${rem(-210)};
		left: unset;
		right: ${rem(-260)};
		z-index: 100000;
		display: block;
	}
`;

export const ValueSection2 = ({
	anchorRef = null,
	onEnter = () => {},
	topOffset = '0',
	children = null,
	title = '',
	body = '',
	...rest
}) => {
	const DEFAULT_REF = useRef(null);
	return (
		<Waypoint onEnter={onEnter} bottomOffset={topOffset}>
			<ValueSectionWrapper>
				<ValueSectionContainer
					{...rest}
					position="relative"
					flexDirection="column"
					mt={[]}
				>
					<ContentContainer
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false }}
						transition={{ duration: 1.5 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						<TextContent flex={[1, 1]} mb={7}>
							<Text variant="h1" mb={6} maxWidth={rem(400)}>
								{title}
							</Text>
							<Text
								variant="h2"
								fontFamily="'Shippori Antique Regular',sans-serif"
								maxWidth={rem(400)}
								fontWeight="lighter"
							>
								{body}
							</Text>
						</TextContent>
						<ImgContent flex={[1, 'auto']} justifyContent="center">
							<ValueImageContainer>
								<MainImage
									className="hidden"
									ref={anchorRef || DEFAULT_REF}
									src="/elements/hello-john.png"
									alt=""
								/>
								<ElevateSmallImg>
									<SwoopImage width={[130, 220]} src="/swoop/golfers/elevate-small.png" />
								</ElevateSmallImg>
								<ElevateBigImg>
									<SwoopImage width={[105, 170]} src="/swoop/golfers/elevate-big.png" />
								</ElevateBigImg>
								<Golfball>
									<SwoopImage width={[105, 170]} src="/swoop/golfers/golfball.png" />
								</Golfball>
							</ValueImageContainer>
						</ImgContent>
					</ContentContainer>
				</ValueSectionContainer>
				{children}
			</ValueSectionWrapper>
		</Waypoint>
	);
};

const BoostRevenueSandwich = styled(SwoopImage)`
	position: absolute;
	top: ${rem(230)};
	right: ${rem(-30)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		right: ${rem(-130)};
		top: ${rem(380)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		right: unset;
		left: ${rem(40)};
		top: ${rem(100)};
	}
`;
const BoostRevenueAddToCart = styled(SwoopImage)`
	position: absolute;
	bottom: ${rem(-40)};
	left: ${rem(-40)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		left: ${rem(-130)};
		bottom: ${rem(-320)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		left: ${rem(-160)};
		top: ${rem(-60)};
	}
`;
const BoostRevenueLemonade = styled(SwoopImage)`
	position: absolute;
	top: ${rem(-20)};
	left: ${rem(-20)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		left: ${rem(-110)};
		top: 0;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		left: ${rem(-180)};
		top: unset;
		bottom: ${rem(-120)};
	}
`;

export const BoostRevenueSection = ({
	anchorRef = null,
	onEnter = () => {},
	topOffset = '0',
	children = null,
	title = '',
	body = '',
	...rest
}) => {
	const DEFAULT_REF = useRef(null);
	return (
		<Waypoint onEnter={onEnter} bottomOffset={topOffset}>
			<ValueSectionWrapper>
				<ValueSectionContainer
					{...rest}
					position="relative"
					flexDirection="column"
					mt={[]}
				>
					<ContentContainer
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false }}
						transition={{ duration: 1.5 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						<TextContent flex={[1, 1]} mb={7}>
							<Text variant="h1" mb={6} maxWidth={rem(400)}>
								{title}
							</Text>
							<Text
								variant="h2"
								fontFamily="'Shippori Antique Regular',sans-serif"
								maxWidth={rem(400)}
								fontWeight="lighter"
							>
								{body}
							</Text>
						</TextContent>
						<ImgContent flex={[1, 'auto']} justifyContent="center">
							<ValueImageContainer>
								<MainImage
									className="hidden"
									ref={anchorRef || DEFAULT_REF}
									src="/elements/hello-john.png"
									alt=""
								/>
								<BoostRevenueSandwich
									width={[130, 200]}
									src="/swoop/courses/courses-sandwich-badge.png"
									alt="golfer holding whiskey drink"
								/>
								<BoostRevenueAddToCart
									width={[280, 380, 420]}
									src="/swoop/courses/courses-add-to-cart.png"
									alt="golfer holding whiskey drink"
								/>
								<BoostRevenueLemonade
									width={[90, 130, 160]}
									src="/swoop/courses/courses-lemonade.png"
									alt="golfer holding whiskey drink"
								/>
							</ValueImageContainer>
						</ImgContent>
					</ContentContainer>
				</ValueSectionContainer>
				{children}
			</ValueSectionWrapper>
		</Waypoint>
	);
};

const EnhanceBottle = styled(SwoopImage)`
	position: absolute;
	top: ${rem(-60)};
	right: ${rem(0)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		right: unset;
		top: ${rem(-200)};
		left: ${rem(0)};
	}
`;
const EnhanceTee1 = styled(SwoopImage)`
	position: absolute;
	top: ${rem(40)};
	left: ${rem(0)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: block;
		top: ${rem(-120)};
		left: ${rem(-60)};
	}
`;
const EnhanceTee2 = styled(SwoopImage)`
	position: absolute;
	bottom: ${rem(0)};
	left: ${rem(90)};
	transform: rotate(70deg);
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		max-height: ${rem(540)};
		display: block;
	}
`;

const FollowThruWrapper = styled(ElevateBigImg)`
	bottom: ${rem(-40)};
	left: ${rem(0)};

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		left: ${rem(-200)};
	}
`;
export const EnhanceSection = ({
	anchorRef = null,
	onEnter = () => {},
	topOffset = '0',
	children = null,
	title = '',
	body = '',
	...rest
}) => {
	const DEFAULT_REF = useRef(null);
	return (
		<ValueSectionWrapper>
			<ValueSectionContainer {...rest} position="relative" flexDirection="column" mt={[]}>
				<ContentContainer
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false }}
					transition={{ duration: 1.5 }}
					variants={{
						visible: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
				>
					<Waypoint onEnter={onEnter} bottomOffset={topOffset}>
						<TextContent flex={[1, 1]} mb={7}>
							<Text variant="h1" mb={6} maxWidth={rem(400)}>
								{title}
							</Text>
							<Text
								variant="h2"
								fontFamily="'Shippori Antique Regular',sans-serif"
								maxWidth={rem(400)}
								fontWeight="lighter"
							>
								{body}
							</Text>
						</TextContent>
					</Waypoint>
					<ImgContent flex={[1, 'auto']} justifyContent="center">
						<ValueImageContainer>
							<MainImage
								className="hidden"
								ref={anchorRef || DEFAULT_REF}
								src="/elements/hello-john.png"
								alt=""
							/>
							<EnhanceBottle width={[90, 130]} src="/swoop/courses/course-huerca.png" />
							<EnhanceTee1 width={[100]} src="/swoop/courses/course-tee.png" />
							<EnhanceTee2 width={[140]} src="/swoop/courses/course-tee.png" />
							<FollowThruWrapper>
								<SwoopImage
									width={[85, 170]}
									src="/swoop/courses/courses-follow-thru.png"
								/>
							</FollowThruWrapper>
						</ValueImageContainer>
					</ImgContent>
				</ContentContainer>
			</ValueSectionContainer>
			{children}
		</ValueSectionWrapper>
	);
};
