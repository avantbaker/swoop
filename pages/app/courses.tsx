import { VerticalTextL } from 'components/app-cards';
import { ByrdiInAction } from 'components/byrdi-in-action';
import Text from 'components/common/text';
import { InstagramSection } from 'components/instagram';
import { NewsletterSection } from 'components/newsletter';
import { PageSectionContainer } from 'components/page-wrapper';
import { TextIntro } from 'components/text-intro';
import {
	BoostRevenueSection,
	CustomSection,
	EnhanceSection,
	FloatingAppContainer,
	MainFloatingHero,
	MobileSection,
	SectionDetails,
} from 'components/value-section';
import {
	IncreaseMarginsSection,
	IntegrateSection,
} from 'components/value-section/alternate';
import { motion, useAnimationControls } from 'framer-motion';
import { BoxPageSectionContainer } from 'pages/brand';
import { rem } from 'polished';
import { useEffect, useRef, useState } from 'react';
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
	z-index: 0;
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

const ValueSectionFloatingImageContainer = styled('div')`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;

	${space}
`;

const ValueSectionFloatingImage = styled('div')`
	width: 240px;
	position: sticky;
	align-self: flex-start;
	z-index: 1;
	display: none;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		width: 320px;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: block;
		width: 320px;
		margin-left: -80px;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
		width: 320px;
		margin-left: -100px;
	}
`;

const BackgroundImage = styled(motion.div)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: url(${({ src }) => src});
	background-position: contain;
	background-size: cover;
	zindex: -1;
`;

const cards = [
	{ imgSrc: '/swoop/courses/courses-sushi.png' },
	{ imgSrc: '/swoop/courses/courses-putting.png' },
	{ imgSrc: '/swoop/courses/courses-bar.png' },
	{ imgSrc: '/swoop/brand/brand-bag.jpeg' },
	{ imgSrc: '/swoop/brand/brand-sand-trap.jpeg' },
	{ imgSrc: '/swoop/brand/brand-aperol.jpeg' },
];
function useOnScreen(options = {}) {
	const [ref, setRef] = useState(null);
	const [visible, setVisible] = useState(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setVisible(entry.isIntersecting);
		}, options);

		if (ref) {
			observer.observe(ref);
		}
		return () => {
			if (ref) {
				observer.unobserve(ref);
			}
		};
	}, [ref, options]);

	return [setRef, visible];
}

export default function App() {
	const controls = useAnimationControls();
	const floatingImageRef = useRef(null);
	const firstImageRef = useRef(null);
	const floatingImageAnchorStartRef = useRef(null);
	const floatingImageAnchorFinalRef = useRef(null);
	const floatingImageContainerFinalRef = useRef(null);
	const firstImageContainerRef = useRef(null);
	const { width, height } = useViewport();
	const [stickyImgPadding, setStickyImgPadding] = useState(0);
	const [imageSrc, setImageSrc] = useState('/swoop/courses/courses-sandwich-screen.png');
	const [topOffset, setTopOffset] = useState(0);
	const [bottomOffset, setBottomOffset] = useState(0);

	const [firstSection, firstSectionIsVisible] = useOnScreen({
		threshold: 0.6,
	});
	const [secondSection, secondSectionIsVisible] = useOnScreen({
		threshold: 0.6,
	});
	const [thirdSection, thirdSectionIsVisible] = useOnScreen({
		threshold: 0.6,
	});
	const [fourthSection, fourthSectionIsVisible] = useOnScreen({
		threshold: 0.6,
	});

	useEffect(() => {
		if (firstSectionIsVisible) {
			(async () => {
				await controls.start({ opacity: 0, transition: { duration: 0.5 } });
				await setImageSrc('/swoop/courses/courses-sandwich-screen.png');
				await controls.start({ opacity: 1, transition: { duration: 0.5 } });
			})();
		}
	}, [firstSectionIsVisible]);
	useEffect(() => {
		if (secondSectionIsVisible) {
			(async () => {
				await controls.start({ opacity: 0 });
				await setImageSrc('/swoop/courses/courses-turkey-club.png');
				await controls.start({ opacity: 1 });
			})();
		}
	}, [secondSectionIsVisible]);
	useEffect(() => {
		if (thirdSectionIsVisible) {
			(async () => {
				await controls.start({ opacity: 0 });
				setImageSrc('/swoop/courses/courses-black-screen.png');
				await controls.start({ opacity: 1 });
			})();
		}
	}, [thirdSectionIsVisible]);
	useEffect(() => {
		if (fourthSectionIsVisible) {
			(async () => {
				await controls.start({ opacity: 0 });
				await setImageSrc('/swoop/golfers/golfers-phone-4.png');
				await controls.start({ opacity: 1 });
			})();
		}
	}, [fourthSectionIsVisible]);

	const [textHeight, setTextHeight] = useState(0);

	useEffect(() => {
		const containerPos = firstImageContainerRef.current.getBoundingClientRect().y;
		const imagePos = firstImageRef.current.getBoundingClientRect().y;
		const deltaForPadding = Math.abs(containerPos - imagePos);
		setStickyImgPadding(deltaForPadding);
		setTextHeight(
			Math.abs(
				floatingImageAnchorStartRef.current.getBoundingClientRect().top -
					floatingImageAnchorStartRef.current.getBoundingClientRect().bottom
			)
		);
	}, [
		floatingImageAnchorStartRef.current,
		firstImageRef.current,
		firstImageContainerRef.current,
	]);
	useEffect(() => {
		const imagePos = floatingImageAnchorFinalRef.current.getBoundingClientRect().bottom;
		const containerPos =
			floatingImageContainerFinalRef.current.getBoundingClientRect().bottom;
		const deltaForBottom = Math.abs(imagePos - containerPos);
		setBottomOffset(deltaForBottom);
	}, [floatingImageAnchorFinalRef.current, floatingImageContainerFinalRef.current]);

	useEffect(() => {
		const top = (height - floatingImageRef.current.clientHeight) / 2;
		setTopOffset(top);
	}, [height, floatingImageRef.current, setTopOffset]);

	return (
		<>
			<TextIntro />
			<FloatingAppContainer>
				<MainFloatingHeroContainer mb={[6, 6, 8]}>
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
									mr={[5]}
								>
									Courses
								</VerticalTextL>
								<img
									style={{
										height: textHeight,
										maxWidth: 'unset',
										width: 'auto',
									}}
									src="/elements/app-courses-desktop-cropped.png"
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
										<a href="https://apps.apple.com/us/app/swoop-golf-concierge/id1633105217">
											<img src="/elements/apple-store.svg" />
										</a>
									</Box>
									<Box>
										<a href="https://play.google.com/store/apps/details?id=io.swoop">
											<img src="/elements/google-play.svg" />
										</a>
									</Box>
								</Flex>
								love
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
							The days of waiting for the food + bev cart or the turn for a cocktail and a
							bite to eat, are long gone. Let the bourbon and burgers come to you, to your
							exact location on the course, by ordering from the clubhouse grill with the
							Swoop App.
						</Text>
						<Flex width="100%" flexDirection="column" alignItems="flex-end">
							<Box mb={3}>
								<a href="https://apps.apple.com/us/app/swoop-golf-concierge/id1633105217">
									<img src="/elements/apple-store.svg" />
								</a>
							</Box>
							<Box>
								<a href="https://play.google.com/store/apps/details?id=io.swoop">
									<img src="/elements/google-play.svg" />
								</a>
							</Box>
						</Flex>
					</MobileSection>
				</MainFloatingHeroContainer>
				<div className="ValueSections" style={{ position: 'relative' }}>
					<ValueSectionFloatingImageContainer mb={[, 8]}>
						<ValueSectionFloatingImage ref={floatingImageRef} style={{ top: topOffset }}>
							<BackgroundImage src={imageSrc} animate={controls} />
							<img
								src="/elements/blank-iphone.png"
								alt=""
								style={{ width: '100%', zIndex: 100000 }}
							/>
						</ValueSectionFloatingImage>
					</ValueSectionFloatingImageContainer>
					<BoxPageSectionContainer hasOverflowY={false}>
						<MotionDivWithSpacing ref={firstSection} mb={[6, 7, 8]}>
							<BoostRevenueSection
								mt={[8]}
								containerRef={firstImageContainerRef}
								anchorRef={firstImageRef}
								title="BOOST REVENUE"
								body="Monetize every food and beverage impulse by allowing customers to order more frequently and conveniently."
								src="/swoop/courses/courses-sandwich-screen.png"
							>
								<Circle1 />
							</BoostRevenueSection>
						</MotionDivWithSpacing>
						<MotionDivWithSpacing ref={secondSection} mb={[6, 7, 8]}>
							<IncreaseMarginsSection
								pt={[8]}
								title="INCREASE MARGINS"
								body="Enjoy all of the culinary comforts for the club grill, on the greens."
								src="/swoop/courses/courses-turkey-club.png"
							>
								<Circle2 />
							</IncreaseMarginsSection>
						</MotionDivWithSpacing>

						<MotionDivWithSpacing ref={thirdSection} mb={[6, 7, 8]}>
							<EnhanceSection
								title="ENHANCE EXPERIENCES"
								body="Create loyal guests and out-gain competitors by offering a superior on-course food & beverage experience."
								pt={[8]}
								src="/swoop/courses/courses-black-screen.png"
							>
								<Circle1 />
								<Circle3 />
							</EnhanceSection>
						</MotionDivWithSpacing>
						<MotionDivWithSpacing ref={fourthSection} mb={[7, 8, 7]}>
							<IntegrateSection
								pt={[8]}
								title="INTEGRATE SEAMLESSLY"
								body="Realize the benefits of on-course purchase without additional overhead and without setup complexity."
								containerRef={floatingImageContainerFinalRef}
								anchorRef={floatingImageAnchorFinalRef}
								src="/swoop/courses/courses-sandwich-screen.png"
							/>
						</MotionDivWithSpacing>
					</BoxPageSectionContainer>
				</div>
			</FloatingAppContainer>
			<ByrdiInAction cards={cards} />
			{/* <TextBanner title="SWOOP LOYALTY REWARDS" /> */}
			{/* <ByrdiLoyaltySection /> */}
			<InstagramSection />
			<NewsletterSection imgSrc="/swoop/golfers/golfer-green.png" />
		</>
	);
}
