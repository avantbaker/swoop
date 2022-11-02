import Text from 'components/common/text';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Flex } from 'rebass/styled-components';
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';
import { rem } from 'polished';

import {
	ValueSectionContainer,
	ContentContainer,
	ValueImageContainer,
	MainImage,
	ValueSectionWrapper,
} from 'components/value-section';
import { SwoopImage } from 'components/image';

const TextContent = styled(Box)`
	grid-column: 1 / 10;
	grid-row: 1 / 2;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-row: 1 / 2;
		grid-column: 1 / 4;
		align-self: center;
	}
`;
const ImgContent = styled(Flex)`
	grid-column: 1 / 13;
	grid-row: 2 / 3;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-row: 1 / 2;
		grid-column: 4 / 13;
	}
`;

export const SandwichImg = styled(motion.img)`
	position: absolute;
	max-width: ${rem(120)};
	top: ${rem(50)};
	right: ${rem(-30)};
	z-index: 0;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		max-width: ${rem(220)};
		top: ${rem(100)};
		right: ${rem(-160)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		max-width: ${rem(220)};
		top: ${rem(-40)};
		right: ${rem(-40)};
	}
`;
export const ModeloImg = styled(motion.img)`
	position: absolute;
	max-height: ${rem(230)};
	left: ${rem(-20)};
	bottom: ${rem(-40)};
	z-index: 5;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		max-height: ${rem(400)};
		left: ${rem(-160)};
		bottom: ${rem(-440)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		max-height: ${rem(400)};
		left: ${rem(-30)};
		bottom: ${rem(-80)};
	}
`;

export const ValueSectionAlt = ({
	anchorRef = null,
	onEnter = () => {},
	topOffset = '0px',
	bottomOffset = '0px',
	children = null,
	debug = false,
	title = '',
	body = '',
	...rest
}) => {
	return (
		<ValueSectionWrapper>
			<ValueSectionContainer {...rest} position="relative" flexDirection="column">
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
					<AnimatePresence>
						<>
							<Waypoint
								onEnter={onEnter}
								debug={debug}
								topOffset={topOffset}
								bottomOffset={bottomOffset}
							>
								<TextContent mb={6}>
									<Text variant="h1" mb={6}>
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
							<ImgContent justifyContent={['center', 'center', 'flex-end']}>
								<ValueImageContainer>
									<MainImage
										className="hidden"
										src="/elements/trilogy-screen.png"
										alt=""
										ref={anchorRef}
									/>
									<SandwichImg
										src="/elements/sandwich.png"
										alt="golfer holding whiskey drink"
									/>
									<ModeloImg
										src="/elements/modelo.png"
										alt="golfer holding whiskey drink"
									/>
								</ValueImageContainer>
							</ImgContent>
						</>
					</AnimatePresence>
				</ContentContainer>
			</ValueSectionContainer>
			{children}
		</ValueSectionWrapper>
	);
};

export const ValueSectionAlt2 = ({
	anchorRef = null,
	onEnter = () => {},
	topOffset = '0px',
	bottomOffset = '0px',
	children = null,
	debug = false,
	title = '',
	body = '',
	...rest
}) => {
	return (
		<ValueSectionWrapper>
			<ValueSectionContainer {...rest} position="relative" flexDirection="column">
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
					<AnimatePresence>
						<>
							{/* <Flex flexDirection={['column', 'row']}> */}
							<TextContent mb={6}>
								<Text variant="h1" mb={6}>
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
							<ImgContent justifyContent={['center', 'center', 'flex-end']}>
								<ValueImageContainer>
									<MainImage
										className="hidden"
										src="/elements/trilogy-screen.png"
										alt=""
										ref={anchorRef}
									/>
									<SandwichImg
										src="/elements/sandwich.png"
										alt="golfer holding whiskey drink"
									/>
									<ModeloImg
										src="/elements/modelo.png"
										alt="golfer holding whiskey drink"
									/>
								</ValueImageContainer>
							</ImgContent>
							{/* </Flex> */}
						</>
					</AnimatePresence>
				</ContentContainer>
				<Waypoint
					onEnter={onEnter}
					debug={debug}
					topOffset={topOffset}
					bottomOffset={bottomOffset}
				/>
			</ValueSectionContainer>
			{children}
		</ValueSectionWrapper>
	);
};

const CheersImg1 = styled(SwoopImage)`
	position: absolute;
	top: 0;
	right: ${rem(-20)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		top: ${rem(-60)};
		right: ${rem(-180)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		top: ${rem(-200)};
		right: ${rem(-60)};
	}
`;

const CheersImg2 = styled(SwoopImage)`
	position: absolute;
	bottom: ${rem(-50)};
	left: ${rem(-20)};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		bottom: ${rem(-220)};
		left: ${rem(-160)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		top: ${rem(80)};
		left: ${rem(-40)};
	}
`;
export const CheersSection = ({
	anchorRef = null,
	containerRef = null,
	onEnter = () => {},
	topOffset = '0px',
	bottomOffset = '0px',
	children = null,
	debug = false,
	title = '',
	body = '',
	...rest
}) => {
	return (
		<ValueSectionWrapper>
			<ValueSectionContainer
				ref={containerRef}
				{...rest}
				position="relative"
				flexDirection="column"
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
					<AnimatePresence>
						<>
							<TextContent mb={[6, 8]}>
								<Text variant="h1" mb={6}>
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
							<ImgContent justifyContent={['center', 'center', 'flex-end']}>
								<ValueImageContainer>
									<MainImage
										className="hidden"
										src="/elements/trilogy-screen.png"
										alt=""
										ref={anchorRef}
									/>
									<CheersImg1
										width={[140, 230]}
										src="/swoop/golfers/golfers-green-aerial.png"
									/>
									<CheersImg2 width={[120, 230]} src="/swoop/golfers/golfers-toast.png" />
								</ValueImageContainer>
							</ImgContent>
						</>
					</AnimatePresence>
				</ContentContainer>
				<Waypoint
					onEnter={onEnter}
					debug={debug}
					topOffset={topOffset}
					bottomOffset={bottomOffset}
				/>
			</ValueSectionContainer>
			{children}
		</ValueSectionWrapper>
	);
};

export const IncreaseMarginsSection = ({
	anchorRef = null,
	onEnter = () => {},
	topOffset = '0px',
	bottomOffset = '0px',
	children = null,
	debug = false,
	title = '',
	body = '',
	...rest
}) => {
	return (
		<ValueSectionWrapper>
			<ValueSectionContainer {...rest} position="relative" flexDirection="column">
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
					<AnimatePresence>
						<>
							<TextContent mb={6}>
								<Text variant="h1" mb={6}>
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
							<ImgContent justifyContent={['center', 'center', 'flex-end']}>
								<ValueImageContainer>
									<MainImage
										className="hidden"
										src="/elements/trilogy-screen.png"
										alt=""
										ref={anchorRef}
									/>
									<SandwichImg
										src="/swoop/courses/courses-sandwich.png"
										alt="golfer holding whiskey drink"
									/>
									<ModeloImg
										src="/swoop/courses/courses-kiosk.png"
										alt="golfer holding whiskey drink"
									/>
								</ValueImageContainer>
							</ImgContent>
						</>
					</AnimatePresence>
				</ContentContainer>
				<Waypoint
					onEnter={onEnter}
					debug={debug}
					topOffset={topOffset}
					bottomOffset={bottomOffset}
				/>
			</ValueSectionContainer>
			{children}
		</ValueSectionWrapper>
	);
};

export const IntegrateSection = ({
	anchorRef = null,
	containerRef = null,
	onEnter = () => {},
	topOffset = '0px',
	bottomOffset = '0px',
	children = null,
	debug = false,
	title = '',
	body = '',
	...rest
}) => {
	return (
		<ValueSectionWrapper ref={containerRef}>
			<ValueSectionContainer {...rest} position="relative" flexDirection="column">
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
					<AnimatePresence>
						<>
							<TextContent mb={[6, 8]}>
								<Text variant="h1" mb={6}>
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
							<ImgContent justifyContent={['center', 'center', 'flex-end']}>
								<ValueImageContainer>
									<MainImage
										className="hidden"
										src="/elements/trilogy-screen.png"
										alt=""
										ref={anchorRef}
									/>
									<CheersImg1
										width={[140, 230]}
										src="/swoop/courses/courses-putting.png"
									/>
									<CheersImg2
										width={[120, 230]}
										src="/swoop/courses/courses-golf-carts.png"
									/>
								</ValueImageContainer>
							</ImgContent>
						</>
					</AnimatePresence>
				</ContentContainer>
				<Waypoint
					onEnter={onEnter}
					debug={debug}
					topOffset={topOffset}
					bottomOffset={bottomOffset}
				/>
			</ValueSectionContainer>
			{children}
		</ValueSectionWrapper>
	);
};
