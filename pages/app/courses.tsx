import { VerticalTextL } from 'components/app-cards';
import { ByrdiInAction } from 'components/byrdi-in-action';
import Text from 'components/common/text';
import { InstagramSection } from 'components/instagram';
import { NewsletterSection } from 'components/newsletter';
import { TextBanner } from 'components/text-banner';
import { TextIntro } from 'components/text-intro';
import {
	CustomSection,
	FloatingAppContainer,
	MainFloatingHero,
	MobileSection,
	SectionDetails,
	BoostRevenueSection,
	EnhanceSection,
} from 'components/value-section';
import {
	IncreaseMarginsSection,
	IntegrateSection,
} from 'components/value-section/alternate';
import {
	motion,
	useAnimationControls,
	useMotionValue,
	useTransform,
	useViewportScroll,
} from 'framer-motion';
import { ByrdiLoyaltySection } from 'pages/brand';
import { rem } from 'polished';
import { useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { space } from 'styled-system';
import { useViewport } from 'use-viewport';

const MotionDivWithSpacing = styled(motion.div)(space);

const MainFloatingHeroContainer = styled(MotionDivWithSpacing)``;
export const Circle1 = styled('div')`
	position: absolute;
	right: ${rem(-400)};
	bottom: ${rem(-100)};
	height: ${rem(574)};
	width: ${rem(574)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		right: ${rem(-180)};
		display: block;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		right: ${rem(-180)};
		bottom: ${rem(60)};
		display: block;
	}
`;
export const Circle2 = styled('div')`
	position: absolute;
	left: ${rem(-220)};
	bottom: 0;
	height: ${rem(470)};
	width: ${rem(470)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	display: none;

	&::before {
		content: '';
		display: block;
		position: absolute;
		bottom: ${rem(-70)};
		right: ${rem(70)};
		height: ${rem(120)};
		width: ${rem(120)};
		border: 0.5px solid ${({ theme }) => theme.colors.calcite};
		border-radius: 50%;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: block;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: block;
		top: ${rem(150)};
	}
`;

export const Circle3 = styled('div')`
	position: absolute;
	left: ${rem(-30)};
	bottom: ${rem(-260)};
	height: ${rem(180)};
	width: ${rem(180)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
	display: none;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		display: block;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		bottom: ${rem(40)};
	}
`;

const FloatingHero = styled(CustomSection)`
	@media (min-width: 1200px) {
		max-width: 1300px !important;
	}
`;

export default function App() {
	const controls = useAnimationControls();
	const { scrollYProgress } = useViewportScroll();
	const { width, height } = useViewport();
	const floatingImageAnchorStartRef = useRef(null);
	const floatingImageAnchorFinishRef = useRef(null);
	const floatingImageRef = useRef(null);
	const [imageSrc, setImageSrc] = useState('/elements/app-golfers-desktop.png');
	const [yStartPosition, setyStartPosition] = useState('0%');
	const [xTransform, setXTransform] = useState(['-28%', '-50%', '-50%']);
	const [scaleTransform, setScaleTransform] = useState([1, 1.3, 1.3]);
	const POSITION = useMotionValue('fixed');
	const TOP = useMotionValue('50%');
	const BOTTOM = useMotionValue('inherit');

	const x = useTransform(scrollYProgress, [0, 0.1, 1], xTransform);
	const y = useTransform(scrollYProgress, [0, 0.1, 1], [yStartPosition, '-50%', '-50%']);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);

	const scale = useTransform(scrollYProgress, [0, 0.1, 1], scaleTransform);

	useEffect(() => {
		const floatingImgRef = floatingImageRef.current.getBoundingClientRect();
		const startAnchorRef = floatingImageAnchorStartRef.current.getBoundingClientRect();
		const anchorBottom = window.pageYOffset + startAnchorRef.bottom;
		const trueBottom = height / 2 + floatingImgRef.height;
		const delta = anchorBottom - trueBottom;
		const floatingYAsPercent = Math.ceil((delta / height) * 100);
		const currentYPosition = `${floatingYAsPercent}%`;
		setyStartPosition(currentYPosition);
	}, [height, setyStartPosition, floatingImageRef, floatingImageAnchorStartRef]);

	useEffect(() => {
		if (width >= 1024) {
			setXTransform(['-44%', '-60%', '-60%']);
			setScaleTransform([1, 1.3, 1.3]);
		}
	}, [width, setXTransform, setScaleTransform, yStartPosition, setyStartPosition]);

	useEffect(() => {
		const handleScroll = () => {
			const lastImg = floatingImageAnchorFinishRef.current.getBoundingClientRect();
			const floatImg = floatingImageRef.current.getBoundingClientRect();

			const lastImgBottom = window.pageYOffset + lastImg.bottom;
			const floatImgBottom = window.pageYOffset + floatImg.bottom;
			const trueImgBottom = lastImgBottom - (lastImg.height + 100) * 1.8;
			const isAboveAnchorPoint = window.pageYOffset < trueImgBottom;

			if (isAboveAnchorPoint) {
				POSITION.set('fixed');
				TOP.set('50%');
			} else if (floatImgBottom >= lastImgBottom) {
				POSITION.set('absolute');
				TOP.set(`${lastImgBottom - (lastImg.height + 24)}px`);
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [height]);

	return (
		<>
			<TextIntro />
			<FloatingAppContainer>
				<motion.img
					ref={floatingImageRef}
					style={{
						left: '50%',
						top: TOP,
						bottom: BOTTOM,
						x,
						y,
						scale,
						position: POSITION,
						zIndex: 1,
					}}
					initial={false}
					animate={controls}
					transition={{
						opacity: {
							duration: 0.7,
							ease: 'easeInOut',
						},
					}}
					className="fixed"
					src={imageSrc}
				/>
				<Waypoint
					onEnter={() => {
						(async () => {
							await controls.start({ opacity: 0 });
							await setImageSrc('/elements/app-courses-desktop.png');
							await controls.start({ opacity: 1 });
						})();
					}}
				>
					<MainFloatingHeroContainer mb={[6, 8]} style={{ opacity }}>
						<MainFloatingHero>
							<FloatingHero
								p={'0 !important'}
								justifyContent="center"
								flexDirection={['column', 'row']}
							>
								<SectionDetails
									justifyContent={['center']}
									py={[5, 6]}
									className="section-details"
								>
									<VerticalTextL
										ref={floatingImageAnchorStartRef}
										variant="displayVertical"
										mb={[2]}
									>
										Courses
									</VerticalTextL>
									<img
										className="hidden"
										src="/elements/app-courses-desktop.png"
										alt=""
									/>
								</SectionDetails>
								<MobileSection
									flexDirection="column"
									alignItems="flex-end"
									position="absolute"
									className="mobile-section--desktop"
								>
									<Text variant="careersSubtitle" color="calcite" maxWidth="60%" mb={4}>
										Worry about the speed of your greens, not the speed of your club cart.
									</Text>
									<Text mb={6}>
										The days of waiting for the food + bev cart or the turn for a cocktail
										and a bite to eat, are long gone. Let the bourbon and burgers come to
										you, to your exact location on the course, by ordering from the
										clubhouse grill with the Swoop App.
									</Text>
									<Flex width="100%" flexDirection="column" alignItems="flex-end">
										<Box mb={3}>
											<img src="/elements/apple-store.png" />
										</Box>
										<Box>
											<img src="/elements/google-play.png" />
										</Box>
									</Flex>
								</MobileSection>
							</FloatingHero>
						</MainFloatingHero>
						<MobileSection
							flexDirection="column"
							alignItems="flex-end"
							className="mobile-section"
						>
							<Text variant="careersSubtitle" color="calcite" maxWidth="60%" mb={4}>
								Worry about the speed of your greens, not the speed of your club cart.
							</Text>
							<Text maxWidth="75%" mb={6}>
								The days of waiting for the food + bev cart or the turn for a cocktail and
								a bite to eat, are long gone. Let the bourbon and burgers come to you, to
								your exact location on the course, by ordering from the clubhouse grill
								with the Swoop App.
							</Text>
							<Flex width="100%" flexDirection="column" alignItems="flex-end">
								<Box mb={3}>
									<img src="/elements/apple-store.png" />
								</Box>
								<Box>
									<img src="/elements/google-play.png" />
								</Box>
							</Flex>
						</MobileSection>
					</MainFloatingHeroContainer>
				</Waypoint>
				<BoostRevenueSection
					mt={[8]}
					mb={[6, rem(440)]}
					title="BOOST REVENUE"
					body="Monetize every food and beverage impulse by allowing customers to order more frequently and conveniently."
					onEnter={() => {
						(async () => {
							await controls.start({ opacity: 0 });
							await setImageSrc('/swoop/courses/courses-sandwich-screen.png');
							await controls.start({ opacity: 1 });
						})();
					}}
				>
					<Circle1 />
				</BoostRevenueSection>
				<IncreaseMarginsSection
					pt={[8]}
					mb={[6, rem(560)]}
					title="INCREASE MARGINS"
					body="Enjoy all of the culinary comforts for the club grill, on the greens."
					onEnter={() => {
						(async () => {
							await controls.start({ opacity: 0 });
							await setImageSrc('/swoop/courses/courses-turkey-club.png');
							await controls.start({ opacity: 1 });
						})();
					}}
				>
					<Circle2 />
				</IncreaseMarginsSection>
				<EnhanceSection
					title="ENHANCE EXPERIENCES"
					body="Create loyal guests and out-gain competitors by offering a superior on-course food & beverage experience."
					pt={[8]}
					mb={[6, rem(500)]}
					onEnter={() => {
						(async () => {
							await controls.start({ opacity: 0 });
							await setImageSrc('/swoop/courses/courses-black-screen.png');
							await controls.start({ opacity: 1 });
						})();
					}}
				>
					<Circle1 />
					<Circle3 />
				</EnhanceSection>
				<IntegrateSection
					pt={[8]}
					mb={[6, rem(410)]}
					anchorRef={floatingImageAnchorFinishRef}
					title="INTEGRATE SEAMLESSLY"
					body="Realize the benefits of on-course purchase without additional overhead and without setup complexity."
					onEnter={() => {
						(async () => {
							await controls.start({ opacity: 0 });
							await setImageSrc('/swoop/courses/courses-order-placed.png');
							await controls.start({ opacity: 1 });
						})();
					}}
				/>
			</FloatingAppContainer>
			<ByrdiInAction />
			<TextBanner title="SWOOP LOYALTY REWARDS" />
			<ByrdiLoyaltySection />
			<InstagramSection />
			<NewsletterSection imgSrc="/swoop/golfers/golfer-green.png" />
		</>
	);
}
