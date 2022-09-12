import { VerticalTextL } from 'components/app-cards';
import Text from 'components/common/text';
import { TextIntro } from 'components/text-intro';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import { position, rem } from 'polished';
import styled from 'styled-components';
import { useViewport } from 'use-viewport';
import { Waypoint } from 'react-waypoint';
import { ByrdiInAction } from 'components/byrdi-in-action';
import { ByrdiLoyaltySection } from 'pages/brand';
import { InstagramSection } from 'components/instagram';
import { TextBanner } from 'components/text-banner';
import { NewsletterSection } from 'components/newsletter';
import { ValueSectionAlt } from 'components/value-section/alternate';
import { space } from 'styled-system';

import {
	FloatingAppContainer,
	MainFloatingHero,
	CustomSection,
	SectionDetails,
	MobileSection,
	ValueSection,
} from 'components/value-section';

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

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		right: ${rem(-180)};
	}
`;
export const Circle2 = styled('div')`
	position: absolute;
	left: -${rem(220)};
	bottom: 0;
	height: ${rem(470)};
	width: ${rem(470)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;

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
`;

export const Circle3 = styled('div')`
	position: absolute;
	left: ${rem(-30)};
	bottom: ${rem(-260)};
	height: ${rem(180)};
	width: ${rem(180)};
	border: 0.5px solid ${({ theme }) => theme.colors.calcite};
	border-radius: 50%;
`;

function isCollide(a, b) {
	var aRect = a.getBoundingClientRect();
	var bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

export default function App() {
	const { scrollYProgress } = useViewportScroll();
	const { width, height } = useViewport();
	const floatingImageAnchorStartRef = useRef(null);
	const floatingImageAnchorFinishRef = useRef(null);
	const floatingImageRef = useRef(null);

	const [yStartPosition, setyStartPosition] = useState('0%');
	const [xTransform, setXTransform] = useState(['-28%', '-50%', '-50%']);
	const [scaleTransform, setScaleTransform] = useState([1, 1.3, 1.3]);
	const POSITION = useMotionValue('fixed');
	const TOP = useMotionValue('50%');
	const BOTTOM = useMotionValue('inherit');

	const x = useTransform(scrollYProgress, [0, 0.1, 1], xTransform);
	const y = useTransform(scrollYProgress, [0, 0.1, 1], [yStartPosition, '-50%', '-50%']);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);
	const floatingImgOpacity = useTransform(
		scrollYProgress,
		[0, 0.1, 0.8, 0.9, 1],
		[1, 1, 1, 0.1, 0]
	);
	const scale = useTransform(scrollYProgress, [0, 0.1, 1], scaleTransform);

	useEffect(() => {
		const floatingImgRef = floatingImageRef.current.getBoundingClientRect();
		const startAnchorRef = floatingImageAnchorStartRef.current.getBoundingClientRect();
		const anchorBottom = window.pageYOffset + startAnchorRef.bottom;
		const trueBottom = height / 2 + floatingImgRef.height;
		const delta = anchorBottom - trueBottom;
		const floatingYAsPercent = Math.ceil((delta / height) * 100) * 1.8;
		const currentYPosition = `${floatingYAsPercent}%`;
		setyStartPosition(currentYPosition);
	}, [height, setyStartPosition, floatingImageRef, floatingImageAnchorStartRef]);

	useEffect(() => {
		// if (width >= 768 && width < 1023) {
		// 	setXTransform(['-28%', '-60%', '-60%']);
		// 	// setyStartPosition([yStartPosition, '-50%', '-50%'])
		// 	setScaleTransform([1, 1.15, 1.15]);
		// }
		if (width >= 1024) {
			setXTransform(['-44%', '-60%', '-60%']);
			// setyStartPosition([yStartPosition, '-50%', '-50%'])
			setScaleTransform([1, 1.3, 1.3]);
		}
	}, [width, setXTransform, setScaleTransform, yStartPosition, setyStartPosition]);

	useEffect(() => {
		const handleScroll = () => {
			const lastImg = floatingImageAnchorFinishRef.current.getBoundingClientRect();
			const floatImg = floatingImageRef.current.getBoundingClientRect();

			const lastImgBottom = window.pageYOffset + lastImg.bottom;
			const floatImgBottom = window.pageYOffset + floatImg.bottom;
			const trueImgBottom = lastImgBottom - (lastImg.height + 100);
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
						opacity: floatingImgOpacity,
						zIndex: 1,
					}}
					className="fixed"
					src="/elements/app-golfers-desktop.png"
				/>
				<MainFloatingHeroContainer style={{ opacity }}>
					<MainFloatingHero>
						<CustomSection
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
								>
									Golfers
								</VerticalTextL>
								<img className="hidden" src="/elements/app-golfers-desktop.png" alt="" />
							</SectionDetails>
							<MobileSection
								flexDirection="column"
								alignItems="flex-end"
								position="absolute"
								className="mobile-section--desktop"
							>
								<Text variant="careersSubtitle" color="calcite" maxWidth="60%" mb={4}>
									We’ll drive the drinks, you drive the ball.
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
						</CustomSection>
					</MainFloatingHero>
					<MobileSection
						flexDirection="column"
						alignItems="flex-end"
						className="mobile-section"
					>
						<Text variant="careersSubtitle" color="calcite" maxWidth="60%" mb={4}>
							We’ll drive the drinks, you drive the ball.
						</Text>
						<Text maxWidth="75%" mb={6}>
							The days of waiting for the food + bev cart or the turn for a cocktail and a
							bite to eat, are long gone. Let the bourbon and burgers come to you, to your
							exact location on the course, by ordering from the clubhouse grill with the
							Swoop App.
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
				<ValueSection
					mb={[6, 8]}
					title="ELEVATE YOUR GAME"
					body="Perfect your pitch. Eliminate mid-round hanger with food + drink delivered to your exact location."
				>
					<Circle1 />
				</ValueSection>
				<ValueSectionAlt
					pt={[8]}
					mb={[6, 8]}
					title="ORDER MORE"
					body="Enjoy all of the culinary comforts for the club grill, on the greens."
				>
					<Circle2 />
				</ValueSectionAlt>
				<ValueSection
					title="KEEP PLAYING"
					body="On-demand, on the course. Fuel your game with refreshments, and don’t stop playing."
				>
					<Circle1 />
					<Circle3 />
				</ValueSection>
				<ValueSectionAlt
					mb={[6, 8]}
					anchorRef={floatingImageAnchorFinishRef}
					title="CHEERS"
					body="Make more memorable rounds by having a round of drinks delivered during your game."
				/>

				{/* <Waypoint
					onEnter={(details) => {
						// set the position of the floating phone to its current location
						const lastImg = floatingImageAnchorFinishRef.current.getBoundingClientRect();
						const lastImageBottom = window.pageYOffset + lastImg.bottom;
						console.log('lastImageBottom: ', lastImageBottom);
						POSITION.set('absolute');
						TOP.set(`${lastImageBottom - (lastImg.height + 24)}px`);
					}}
					onLeave={() => {
						TOP.set(`50%`);
						POSITION.set('fixed');
					}}
					topOffset={0}
				/> */}
			</FloatingAppContainer>
			<ByrdiInAction />
			<TextBanner title="SWOOP LOYALTY REWARDS" />
			<ByrdiLoyaltySection />
			<InstagramSection />
			<NewsletterSection />
		</>
	);
}
