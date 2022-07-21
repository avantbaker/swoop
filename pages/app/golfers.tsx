import { TextIntro } from 'components/text-intro';
import { DualPathSection, DualSection, VerticalTextL } from 'components/app-cards';
import { Section } from 'components/common/container';
import styled from 'styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import { Flex, Box } from 'rebass/styled-components';
import {
	motion,
	useElementScroll,
	useInView,
	useTransform,
	useViewportScroll,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

const CustomDualPathSection = styled(DualPathSection)`
	height: 500vh;
	background: ${({ theme }) => theme.colors.black};
	position: relative;
	.fixed {
		position: fixed;
		margin-left: 35vw;
		max-height: ${rem(340)};
		z-index: 10;
	}
`;
const CustomSection = styled(Section)``;
const SectionDetails = styled(DualSection)`
	position: relative;

	img {
		transform: translateY(${rem(20)});
		max-height: ${rem(340)};
	}
	.hidden {
		visibility: hidden;
	}
	.fixed {
		position: fixed;
		z-index: 10;
	}
`;

const MobileSection = styled(Section)`
	position: relative;
	text-align: right;
`;

const TestSectionContainer = styled(motion.div)`
	height: 100vh;
`;

const TestSection = ({ ...rest }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	useElementScroll;
	return (
		<TestSectionContainer ref={ref} {...rest}>
			<motion.img style={{}} src="/elements/app-golfers-desktop.png" alt="" />
		</TestSectionContainer>
	);
};
export default function App() {
	const { scrollYProgress } = useViewportScroll();

	const x = useTransform(scrollYProgress, [0, 0.1, 1], ['10%', '-15%', '-15%']);
	const y = useTransform(scrollYProgress, [0, 0.1, 1], ['5vh', '-10vh', '-10vh']);
	const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0, 0]);
	const opacity2 = useTransform(
		scrollYProgress,
		[0, 0.1, 0.8, 0.9, 1],
		[1, 1, 1, 0.1, 0]
	);
	const scale = useTransform(scrollYProgress, [0, 0.1, 1], [1, 1.3, 1.3]);
	return (
		<>
			<TextIntro />
			<CustomDualPathSection>
				<motion.img
					style={{
						x,
						y,
						scale,
						opacity: opacity2,
					}}
					className="fixed"
					src="/elements/app-golfers-desktop.png"
					alt=""
				/>
				<motion.div style={{ opacity }}>
					<CustomSection
						p={'0 !important'}
						justifyContent="center"
						flexDirection={['column', 'row']}
					>
						<SectionDetails justifyContent={['center']} py={[5, 6]}>
							<VerticalTextL variant="displayVertical">Golfers</VerticalTextL>
							<img className="hidden" src="/elements/app-golfers-desktop.png" alt="" />
						</SectionDetails>
					</CustomSection>
					<MobileSection flexDirection="column" alignItems="flex-end">
						<Text variant="careersSubtitle" color="calcite" maxWidth="60%" mb={4}>
							We’ll drive the drinks, you drive the ball.
						</Text>
						<Text mb={6}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
							pharetra sapien, non commodo ex eleifend tempor.
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
				</motion.div>
				<TestSection />
			</CustomDualPathSection>
		</>
	);
}
