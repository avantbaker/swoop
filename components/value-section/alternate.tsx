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
		top: ${rem(50)};
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
		bottom: ${rem(-300)};
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
	...rest
}) => {
	return (
		<ValueSectionWrapper>
			<Waypoint
				onEnter={onEnter}
				debug={debug}
				topOffset={topOffset}
				bottomOffset={bottomOffset}
			>
				<ValueSectionContainer {...rest} position="relative" flexDirection="column">
					<ContentContainer
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false }}
						transition={{ duration: 1 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						<AnimatePresence>
							<>
								{/* <Flex flexDirection={['column', 'row']}> */}
								<TextContent mb={6}>
									<Text variant="h1" mb={4}>
										Value to Golfer
									</Text>
									<Text variant="h2" width={[, rem(340)]}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
				</ValueSectionContainer>
			</Waypoint>
			{children}
		</ValueSectionWrapper>
	);
};
